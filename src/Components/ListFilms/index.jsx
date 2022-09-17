import { Link } from "react-router-dom";
import HOCListFromApi from "../HOCList";

function ListFilms({data}) {
    return (<>
        <h1>Films</h1>
        
            {data.results?.map((val, index)=>{
                const {url, title} = val
                const arrNew = url.split("/")
                const id = arrNew[arrNew.length -2]
                return <h3 key={index}><Link to={`/collections/films/${id}`}>{title}</Link></h3>
            })}
        
    </>  );
}

let FilmsList = new HOCListFromApi(ListFilms, "https://swapi.dev/api/films")

export default FilmsList;