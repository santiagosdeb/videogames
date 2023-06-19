import React, { useContext, useState } from "react";
import logoLight from "../assets/sdebLight.png";
import logo from "../assets/logo-removebg-preview.png";
import { IoIosSearch, IoIosMoon, IoIosSunny } from "react-icons/io";
import ThemeContext from "../Context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeHandler = (e) => {
    e.preventDefault();
    if(theme === "light") {
        setTheme("dark");
        localStorage.setItem('theme', 'dark');
     } else { 
        setTheme("light");
        localStorage.setItem('theme', 'light');
     };
  };


  return (
    <div className='flex items-center bg-transparent p-2 w-full'>
     <img src={logo} alt="Logo" width={60} height={60} className="mx-2"/>
      <div className="flex bg-slate-200 p-2 w-full rounded-full items-center p-1 mx-2">
        <IoIosSearch />
        <input type="text" placeholder="Search games" className='bg-transparent outline-none pl-2' />
      </div>
      <div>
        {theme === "light" ? (
          <IoIosMoon
            className="text-[35px] text-black bg-slate-200 rounded-full p-2 m-1"
            onClick={themeHandler}
          />
        ) : (
          <IoIosSunny
            className="text-[35px] text-black bg-slate-200 rounded-full p-2 m-1"
            onClick={themeHandler}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
