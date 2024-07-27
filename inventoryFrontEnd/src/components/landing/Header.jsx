import logo from "../../assets/makerTrackerLogo.png"
import { Link } from "react-router-dom"

import "../../styling/main/Header.css"

const Header = () => {
    return ( 
        <div className="header">
            <a href = "/"><img src={logo}/> </a>
            <ul className="links">
                <Link to="/about">About</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/parts">Parts</Link>
            </ul>
        </div>
     );
}
 
export default Header;