import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <img src={homeIcon} alt="home" />
            </Link>
        </div>
    )
}

export default Navbar;
