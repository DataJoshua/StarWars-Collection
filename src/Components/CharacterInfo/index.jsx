import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import TableData from '../dummyComponents/TableData'
import TableDataFromUrl from '../dummyComponents/TableDataFromUrl'

import "./styles.css"

function CharacterInfo() {
    let {id} = useParams()

    let [data, setData] = useState({})


    useEffect(()=>{
        const makeApiCall = async ()=>{
            let f = await fetch(`https://swapi.dev/api/people/${id}`)
            let res  = await f.json()
            setData(res)
            
           
        }
        makeApiCall()


    }, [])

 









  

console.log(data);
    return ( 
        <div className="container" style={{
            flexDirection: "column"
        }}>
            <h1>{data.name}</h1>
           <table className='table-info'>
                <thead>
                    <tr>
                        <th colSpan={2}>Information</th>
                    </tr>
                </thead>
                <tbody>
                    <TableData name="height" data={data.height}></TableData>
                    <TableData name="mass" data={data.mass}></TableData>
                    <TableData name="hair color" data={data.hair_color}></TableData>
                    <TableData name="skin color" data={data.skin_color}></TableData>
                    <TableData name="eye color" data={data.eye_color}></TableData>
                    <TableData name="gender" data={data.gender}></TableData>
                    <TableData name="skin color" data={data.skin_color}></TableData>
                    <TableData name="skin color" data={data.skin_color}></TableData>
                </tbody>
           </table>

            <table>
                <thead>
                    <tr>
                        <td colSpan={2}>Films</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.films?.map((paramUrl)=>{
                            return  <TableDataFromUrl url={paramUrl} type="films" dataInput="title" ></TableDataFromUrl>
                        })
                    }
                  
                </tbody>
            </table>
        </div>

    );
}

export default CharacterInfo;