import HOCListFromApi from "../HOCList";

import {Link} from 'react-router-dom'

function ListPerson({data}) {

 

    return ( 
        <>
            <h1>Character</h1>
            {data.results?.map((val, index)=>{
                let {name, url} = val
                let arrUrl = url.split("/")
                let id = arrUrl[arrUrl.length - 2]
                console.log(id);
                return <h3 key={index}><Link to={`/collections/characters/${id}`}>{name}</Link></h3>
            })}
            
        </>
    );
}



let PersonList = HOCListFromApi(ListPerson, `https://swapi.dev/api/people`)
export default PersonList;