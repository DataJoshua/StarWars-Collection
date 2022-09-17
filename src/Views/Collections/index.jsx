import "./styles.css"
import characters from "../../Assets/imgs/characters.png"
import planets from "../../Assets/imgs/planets.jpg"
import films from "../../Assets/imgs/ships.jpg"
import {useRef} from 'react';
function Collections() {


    const imagen = useRef()


    return (
        
        <div className="container-collections">
            <h1>Collections</h1>
            <div className="collections">
                <div className="collection-option">
                    <div className="image-characters"></div>
                    <a href="collections/characters">Characters</a>
                </div>
                <div className="collection-option">
                <div className="image-planets"></div>
                    <a href="collections/planets">Planets</a>
                </div>
                <div className="collection-option">               
                <div className="image-films"></div>
                    <a href="collections/films">Films</a>
                </div>
            </div>
        </div>

      );
}

export default Collections;