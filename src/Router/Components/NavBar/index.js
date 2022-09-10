import {Link} from "react-router-dom"
import Collections from "../../../Views/Collections";

function NavBar() {
    return ( <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="collections" element={<Collections/>}>Collections</Link></li>
        </ul>
    </nav> );
}

export default NavBar;