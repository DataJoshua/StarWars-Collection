import {Link} from "react-router-dom"
import Collections from "../../../Views/Collections";
import "./styles.css";
import logo from "../../../Assets/imgs/logo.svg"
function NavBar() {
    return ( <nav>
        <div className="logo">
            <img src={logo} alt="" />
            <h1>Collections</h1>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="collections" element={<Collections/>}>Collections</Link></li>
        </ul>
    </nav> );
}

export default NavBar;