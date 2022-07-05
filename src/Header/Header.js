import logo from "../assets/img/logo.png";
import switch_theme from "../assets/img/switch_theme.png"
import "./Header.css"

function Header() {
    return(
        <div className="container">
            <img src={logo} alt="logo" />
            <img src={switch_theme} alt="switch_theme" />
        </div>
    );
}

export default Header;