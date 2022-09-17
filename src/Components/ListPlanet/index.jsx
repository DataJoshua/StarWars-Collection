import HOCListFromApi from "../HOCList";
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

function ListPlanet({data}) {

    

    return ( 
        <>
            <h1>Planets</h1>
            {data.results?.map((val, index)=>{
                let {name, url} = val
                let newArr = url.split("/")
                let id = newArr[newArr.length - 2]
                return <h3 key={index}><Link to={`/collections/planets/${id}`}>{name}</Link></h3>
            })}
            
        </>
    );
}



let PlanetsList = HOCListFromApi(ListPlanet, `https://swapi.dev/api/planets`)
export default PlanetsList;