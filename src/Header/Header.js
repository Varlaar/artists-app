import React from "react";
import logo from "../assets/img/logo.png";
import switch_theme from "../assets/img/switch_theme.png";
import switch_theme_dark from "../assets/img/switch_theme_dark.png";
import "./Header.scss";
import "./Header-media.scss";
import "fwt-internship-uikit";

function Header({ onClick, isDarkTheme }) {
  const imgUrl = React.useMemo(
    () => (isDarkTheme ? switch_theme_dark : switch_theme),
    [isDarkTheme]
  );

  return (
    <div className="container-header">
      <img src={logo} alt="logo" />
      <img
        className="switch-theme"
        onClick={onClick}
        src={imgUrl}
        alt="switch_theme"
      />
    </div>
  );
}
export default Header;
