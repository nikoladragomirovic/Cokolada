import React from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary duration-300 text-white p-4 py-24 outline outline-1 outline-text">
      <div className="container mx-auto flex flex-col items-center justify-center text-text">
        <p>&copy; 2023 Ћоколада</p>
        <Link to="/report" className="flex flex-row items-center mt-3">
          <BsExclamationCircleFill className="text-xl text-text" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
