import HOCListFromApi from "../HOCList";

import {Link} from 'react-router-dom'

function ListPerson({data}) {

 

    return ( 
        <>
            <h1>Character</h1>
            {data.results?.map((val, index)=>{
                let {name} = val
                return <h3 key={index}><Link to={`/collections/characters/${index + 1}`}>{name}</Link></h3>
            })}
            
        </>
    );
}



let PersonList = HOCListFromApi(ListPerson, `https://swapi.dev/api/people`)
export default PersonList;