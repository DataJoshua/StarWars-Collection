import HOCListFromApi from "../HOCList";
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

function ListPlanet({data}) {

    

    return ( 
        <>
            <h1>Planets</h1>
            {data.results?.map((val, index)=>{
                let {name} = val
                return <h3 key={index}><Link to={`/collections/planets/${index + 1}`}>{name}</Link></h3>
            })}
            
        </>
    );
}



let PlanetsList = HOCListFromApi(ListPlanet, `https://swapi.dev/api/planets`)
export default PlanetsList;