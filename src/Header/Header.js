import logo from "../assets/img/logo.png";
import switch_theme from "../assets/img/switch_theme.png";
import switch_theme_dark from "../assets/img/switch_theme_dark.png";
import "./Header.css";

function Header({ onClick, isDarkTheme }) {
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      {isDarkTheme ? (
        <img
          onClick={onClick}
          src={switch_theme_dark}
          alt="switch_theme_dark"
        />
      ) : (
        <img onClick={onClick} src={switch_theme} alt="switch_theme" />
      )}
    </div>
  );
}

export default Header;
