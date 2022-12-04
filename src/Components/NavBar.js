import { Link } from "react-router-dom";
import "../Styles/navbar.css"
const NavBar = () => {
    return ( 
        <div className="navbar-container">
            <p><Link to="/">Home</Link></p>
            <p><Link to="/create-book">Add Book</Link></p>
            

        </div>
     );
}
 
export default NavBar;