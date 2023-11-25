import React from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const listItem = "mr-8 text-text text-xl tracking-wider duration-300";

const Navbar = () => {
  const [isDarkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = (checked) => {
    if (checked) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setDarkMode(checked);
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-background py-3 duration-300 outline-dashed outline-2 outline-text">
      <ul className="flex flex-row items-center justify-between">
        <li
          className="text-3xl font-extrabold tracking-wider ml-5 text-text duration-300"
          Link
          to="/"
        >
          Ћоколада
        </li>
        <div className="flex flex-row items-center justify-start duration-300">
          <li className={listItem}>
            <Link to="/about">Абаут</Link>
          </li>
          <li className={listItem}>
            <Link to="/contact">Контакт</Link>
          </li>
          <DarkModeSwitch
            className="mr-8 duration-300"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            moonColor="var(--text)"
            sunColor="var(--text)"
          />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
