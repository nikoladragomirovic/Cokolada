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
    <nav className="sticky top-0 left-0 w-full bg-background py-3 duration-300 outline outline-1 outline-text z-20">
      <ul className="flex flex-row items-center justify-between">
        <li className="text-3xl font-extrabold tracking-wider ml-5 text-text duration-300">
          <Link to="/">Ћоколада</Link>
        </li>
        <div className="flex flex-row items-center justify-start duration-300">
          <li className={listItem}>
            <Link to="/onama">О нама</Link>
          </li>
          <li className={listItem}>
            <Link to="/razvoj">Развој</Link>
          </li>
          <li className={listItem}>
            <Link to="/dizajn">Дизајн</Link>
          </li>
          <li className={listItem}>
            <Link to="/resursi">Ресурси</Link>
          </li>
          <li className={listItem}>
            <Link to="/magazin">Магазин</Link>
          </li>
          <li className={listItem}>
            <Link to="/zajednica">Заједница</Link>
          </li>
          <li className={listItem}>
            <Link to="/kontakt">Контакт</Link>
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
