import React from "react";
import { TbPhoneFilled } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const About = () => {
  const title = "text-5xl font-bold tracking-wider text-text";
  const subtitle = "text-4xl font-bold tracking-wider text-text";

  return (
    <div className="grid grid-flow-col grid-cols-2 grid-rows-1">
      <div className="flex flex-col items-center justify-around">
        <h1 className={title}>О НАМА</h1>
        <div className="h-72 w-[500px] bg-text rounded-xl mt-14"></div>
        <p className="m-24 text-center text-text">
          Лорем ипсум долор сит амет, цонсецтетур адиписцинг елит. Нуллам
          молестие рхонцус алиqуам. Нулла фацилисис аугуе сед рутрум ултрициес.
          Вестибулум вененатис фрингилла сагиттис. Лорем ипсум долор сит амет,
          цонсецтетур адиписцинг елит. Нуллам молестие рхонцус алиqуам. Нулла
          фацилисис аугуе сед рутрум ултрициес. Вестибулум вененатис фрингилла
          сагиттис.
        </p>
      </div>
      <div className="flex flex-col items-center justify-start">
        <h1 className={title}>КОНТАКТ</h1>
        <div>
          <h1 className={subtitle + " mt-14 mb-4"}>ДА</h1>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-2">
            <TbPhoneFilled className="mr-2 text-3xl" />
            +381 777888
          </div>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-2">
            <IoMdMail className="mr-2 text-3xl" />
            darkoni@gmail.com
          </div>
          <div className="flex flex-row items-center justify-start text-xl text-text">
            <RiInstagramFill className="mr-2 text-3xl" />
            @darko.mihic
          </div>
        </div>
        <div>
          <h1 className={subtitle + " mt-6 mb-4"}>РО</h1>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-2">
            <TbPhoneFilled className="mr-2 text-3xl" />
            +381 777888
          </div>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-2">
            <IoMdMail className="mr-2 text-3xl" />
            roskoni@gmail.com
          </div>
          <div className="flex flex-row items-center justify-start text-xl text-text">
            <RiInstagramFill className="mr-2 text-3xl" />
            @david.rosic
          </div>
        </div>
        <div>
          <h1 className={subtitle + " mt-6 mb-4"}>НИ</h1>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-2">
            <TbPhoneFilled className="mr-2 text-3xl" />
            +381 777888
          </div>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-2">
            <IoMdMail className="mr-2 text-3xl" />
            niloni@icloud.com
          </div>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-20">
            <RiInstagramFill className="mr-2 text-3xl" />
            @niledragomirovic
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
