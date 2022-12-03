import { Link } from "react-router-dom";
import "../Styles/navbar.css"
const NavBar = () => {
    return ( 
        <div className="navbar-container">
            <a><Link to="/">Home</Link></a>
            <a><Link to="/create-book">Add Book</Link></a>
            

        </div>
     );
}
 
export default NavBar;