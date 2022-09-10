import { Link } from "react-router-dom";
import HOCListFromApi from "../HOCList";

function ListFilms({data}) {
    return (<>
        <ul>
            {data.results?.map((val, index)=>{
                return <li key={index}><Link to={`/collections/films/${index + 1}`}>{val.title}</Link></li>
            })}
        </ul>
    </>  );
}

let FilmsList = new HOCListFromApi(ListFilms, "https://swapi.dev/api/films")

export default FilmsList;