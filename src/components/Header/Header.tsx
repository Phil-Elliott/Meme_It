import React, { useEffect, useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { BsFillSunFill } from "react-icons/bs";
import Avatar from "../../shared/avatar/Avatar";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(darkMode ? "light" : "dark");
    root.classList.add(darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="flex justify-between flex-col xs:flex-row items-center border-b-2 px-4 sm:px-8 py-4">
      <div className="text-2xl font-bold hidden sm:block">
        <h1>TDM</h1>
      </div>
      <h1 className="text-2xl font-bold md:ml-20 pb-4 xs:p-0">TheDailyMeme</h1>
      <div className="text-2xl space-x-4 sm:space-x-6 flex items-center">
        <button className="">
          <AiFillQuestionCircle />
        </button>
        <button
          className="relative flex justify-between space-x-0 border-2 rounded-full px-3 py-2 text-sm w-24"
          onClick={() => toggleDarkMode()}
          aria-label="toggle dark mode"
        >
          <BsFillSunFill />
          <div
            className={`absolute border-2 h-full w-10 top-0 rounded-full transition-all duration-500 ease-in-out ${
              !darkMode ? "left-0" : "right-0"
            }`}
          ></div>
          <CiDark />
        </button>
        <button className="text-lg">Sign In</button>
        {/* <Avatar /> */}
      </div>
    </div>
  );
};

export default Header;

/*

- Add better animation to the dark mode button

*/
