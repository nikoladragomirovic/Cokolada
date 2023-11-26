import React from "react";
import { IoSend } from "react-icons/io5";

const Report = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-text mt-10 tracking-wider">
        КОНТАКТИРАЈ НАС
      </h1>
      <div className="flex flex-row items-center justify-around w-1/2">
        <textarea
          className="w-11/12 p-2 text-text resize-none text-xl my-10 bg-secondary outline outline-offset-0 outline-text outline-2 focus:outline-4 focus:outline-accent duration-150 placeholder-text rounded-md"
          placeholder="Ваше име"
        ></textarea>
        <IoSend className="text-5xl mx-8 -rotate-90 text-text" />
      </div>
      <textarea
        className="mb-20 p-2 text-text outline-2 outline-offset-0 outline outline-text focus:outline-4 focus:outline-accent duration-150 text-xl resize-none align-text-top w-1/2 placeholder-text h-[450px] bg-secondary rounded-md"
        placeholder="Ваша порука"
      ></textarea>
    </div>
  );
};

export default Report;
