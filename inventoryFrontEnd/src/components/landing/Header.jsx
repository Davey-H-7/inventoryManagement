import logo from "../../assets/makerTrackerLogo.png"
import "../../styling/main/Header.css"

const Header = () => {
    return ( 
        <div className="header">
            <img src={logo}/>
        </div>
     );
}
 
export default Header;