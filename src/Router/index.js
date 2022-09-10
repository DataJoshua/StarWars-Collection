import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterInfo from "../Components/CharacterInfo";
import FilmsInfo from "../Components/FilmsInfo";
import FilmsList from "../Components/ListFilms";
import PersonList from "../Components/ListPerson";
import PlanetsList from "../Components/ListPlanet";
import PlanetsInfo from "../Components/PlanetsInfo";
import Collections from "../Views/Collections";
import Home from "../Views/Home";
import NavBar from "./Components/NavBar";


function MyRouter() {
    return ( 
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="/collections" element={<Collections/>}></Route>
                <Route path="/collections/characters" element={<PersonList></PersonList>}></Route>
                <Route path="/collections/planets" element={<PlanetsList></PlanetsList>}></Route>
                <Route path="/collections/characters/:id" element={<CharacterInfo/>}></Route>
                <Route path="/collections/planets/:id" element={<PlanetsInfo></PlanetsInfo>}></Route>
                <Route path="/collections/films/" element={<FilmsList></FilmsList>}></Route>
                <Route path="/collections/films/:id" element={<FilmsInfo></FilmsInfo>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MyRouter;