import React from 'react'
import {useParams} from 'react-router-dom';
import "./styles.css"

function HOCListFromApi(WrapperComponent, APIurl){
    


    return class extends React.Component{
        constructor(props){
            super(props)
           
            this.state = {
                data: [],
                url: APIurl
            }
        }

        
        makeApiCall = async (url)=>{
            const f = await fetch(url)
            const res = await f.json()
            this.setState({data: res})
        }
        
        componentDidMount(){
            this.makeApiCall(APIurl)
         
        }

      
        handleNextClick = ()=>{
            let {data} = this.state

            if(data.next){
                
                this.makeApiCall(data.next)
            }
            
        }
         
        handlePrevClick = ()=>{
            let {data} = this.state
            
            if(data.previous){
                
                this.makeApiCall(data.previous)
            }
        
        }

        render(){

            let {data} = this.state
            return(
                <div className='listHOC-container'>
                    <WrapperComponent data={this.state.data}></WrapperComponent>
                    <div className='btns'>
                        {data.previous &&  <button onClick={()=> this.handlePrevClick()}>prev</button>}
                        {data.next &&  <button onClick={()=> this.handleNextClick()}>next</button>}
                
                    </div>

                </div>
            )
        }
    }
}


export default HOCListFromApi