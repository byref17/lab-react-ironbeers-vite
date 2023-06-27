import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"

function Navbar() {
    return (
        <Link to="/">
            <img src={homeIcon} alt="home" />
        </Link>
    )
}

export default Navbar;
