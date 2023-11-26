import React from "react";
import { Link } from "react-router-dom";
import { FaPaintBrush } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { FaHammer } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { SiDiscord } from "react-icons/si";

const Bento = () => {
  const box =
    "bg-secondary rounded-xl duration-300 flex flex-col items-center justify-start";

  const title = "text-5xl font-bold tracking-wider mt-8 text-text";

  const subtitle = "text-center m-8 text-text ";

  return (
    <div className="max-w-screen-xl mx-auto duration-300 mt-20 mb-48">
      <div className="grid auto-rows-[400px] grid-cols-6 gap-4">
        <Link to="/dizajn" className={box + " col-span-2"}>
          <h1 className={title}>ДИЗАЈН</h1>
          <FaPaintBrush className="text-6xl mt-8 text-text" />
          <p className={subtitle}>
            Лорем ипсум долор сит амет, цонсецтетур адиписцинг елит. Нуллам
            молестие рхонцус алиqуам. Нулла фацилисис аугуе сед рутрум
            ултрициес. Вестибулум вененатис фрингилла сагиттис.
          </p>
        </Link>
        <Link to="/resursi" className={box + " col-span-3"}>
          <h1 className={title}>РЕСУРСИ</h1>
          <GrResources className="text-8xl mt-5 text-text" />
          <p className={subtitle}>
            Лорем ипсум долор сит амет, цонсецтетур адиписцинг елит. Нуллам
            молестие рхонцус алиqуам. Нулла фацилисис аугуе сед рутрум
            ултрициес. Вестибулум вененатис фрингилла сагиттис. Лорем ипсум
            долор сит амет, цонсецтетур адиписцинг елит. Нуллам молестие рхонцус
            алиqуам. Нулла фацилисис аугуе сед рутрум ултрициес. Вестибулум
            вененатис фрингилла сагиттис.
          </p>
        </Link>
        <Link
          to="https://discord.gg/kwmkuGjzYu"
          className="bg-secondary rounded-xl duration-300 flex flex-col items-center justify-center col-span-1"
        >
          <SiDiscord className="text-text text-8xl" />
        </Link>
        <Link to="/magazin" className={box + " col-span-4"}>
          <h1 className={title}>МАГАЗИН</h1>
          <LuNewspaper className="text-8xl mt-7 text-text" />
          <p className={subtitle}>
            Лорем ипсум долор сит амет, цонсецтетур адиписцинг елит. Нуллам
            молестие рхонцус алиqуам. Нулла фацилисис аугуе сед рутрум
            ултрициес. Вестибулум вененатис фрингилла сагиттис. Лорем ипсум
            долор сит амет, цонсецтетур адиписцинг елит. Нуллам молестие рхонцус
            алиqуам. Нулла фацилисис аугуе сед рутрум ултрициес. Вестибулум
            вененатис фрингилла сагиттис.
          </p>
        </Link>
        <Link to="/razvoj" className={box + " col-span-2"}>
          <h1 className={title}>РАЗВОЈ</h1>
          <FaHammer className="text-7xl mt-7 text-text" />
          <p className={subtitle}>
            Лорем ипсум долор сит амет, цонсецтетур адиписцинг елит. Нуллам
            молестие рхонцус алиqуам. Нулла фацилисис аугуе сед рутрум
            ултрициес. Вестибулум вененатис фрингилла сагиттис.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Bento;
