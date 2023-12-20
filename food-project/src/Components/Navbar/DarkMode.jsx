import React from 'react';
import  darkPng from "../../assets/website/dark-mode-button.png";
import  lightPng from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
    const [theme, settheme] = React.useState(localStorage.getItem("theme")? localStorage.getItem(theme): "light");

    const element = document.documentElement;
  return (
    <div className="relative">
        <img src={darkPng} alt="" className="w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" />
        <img src={lightPng} alt="" className="w-12  right-0 z-10 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" />
    </div>
  )
}

export default DarkMode