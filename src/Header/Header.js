import React from "react";
import logo from "../assets/img/logo.png";
import switch_theme from "../assets/img/switch_theme.png";
import switch_theme_dark from "../assets/img/switch_theme_dark.png";
import "./Header.css";

function Header({onClick, isDarkTheme}) {
   const changeTheme = (isDarkTheme) => {
    return {isDarkTheme} ? switch_theme : switch_theme_dark
   }
    return(
        <div className="container">
            <img src={logo} alt="logo" />
            <img onClick={onClick} src={changeTheme()} alt="switch_theme" />
        </div>
    );
}

export default Header;