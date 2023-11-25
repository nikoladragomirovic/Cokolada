import React from "react";
import { Link } from "react-router-dom";

const box = "bg-secondary rounded-xl duration-300";

const Bento = () => {
  return (
    <div className="max-w-screen-xl mx-auto duration-300 my-20">
      <div className="h-screen grid auto-rows-[450px] grid-cols-6 gap-4">
        <Link to="/dizajn" className={box + " col-span-2"}></Link>
        <Link to="/resursi" className={box + " col-span-3"}></Link>
        <Link to="/zajednica" className={box + " col-span-1"}></Link>
        <Link to="/magazin" className={box + " col-span-4"}></Link>
        <Link to="/razvoj" className={box + " col-span-2"}></Link>
      </div>
    </div>
  );
};

export default Bento;
