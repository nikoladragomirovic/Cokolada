import React from "react";
import chocolate from "../assets/chocolate.svg";

const title = "text-9xl font-extrabold tracking-wider text-text duration-300 ";

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-background duration-300">
      <div className="flex flex-row mb-36">
        <h1 className={title + "bounce-in-top"}>Ћ</h1>
        <h1 className={title}>околада</h1>
      </div>
    </div>
  );
};

export default Hero;
