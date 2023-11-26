import React from "react";
import { Link } from "react-router-dom";
import { FaPaintBrush } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { FaHammer } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { SiDiscord } from "react-icons/si";

const Bento = () => {
  const box =
    "bg-secondary rounded-xl duration-300 flex flex-col items-center justify-start hover:scale-95 hover:bg-primary text-text hover:text-background";

  const title = "text-5xl font-bold tracking-wider mt-8";

  const subtitle = "text-center m-8";

  return (
    <div className="max-w-screen-xl mx-auto duration-300 mt-20 mb-48">
      <div className="grid auto-rows-[400px] grid-cols-6 gap-4">
        <Link to="/dizajn" className={box + " col-span-2"}>
          <h1 className={title}>ДИЗАЈН</h1>
          <FaPaintBrush className="text-6xl mt-8" />
          <p className={subtitle}>
            Истражите бесплатне фонтове, које можете пронаћи и у нашој
            динамичној бази. Дизајнирајте свој веб садржај на ћирилици са
            лакоћом користећи наше алате, који не само што обухватају фонтове,
            већ и помажу у креирању иновативних дизајна, посебно за веб.
          </p>
        </Link>
        <Link to="/resursi" className={box + " col-span-3"}>
          <h1 className={title}>РЕСУРСИ</h1>
          <GrResources className="text-8xl mt-5" />
          <p className={subtitle}>
            Истражите наше ресурсе за обогаћивање вашег искуства! Проникните у
            свет корисних алата, линкова ка апликацијама и базама, укључујући
            конверторе текста, отворени AI и ML ресурсе, као и алате за српски
            језик, као што је NLP пројект "Комтекст" у развоју. У нашем арсеналу
            такође налазе се занимљиви и корисни алати као што су Вајбер стикери
            и други креативни садржаји на ћирилици.
          </p>
        </Link>
        <Link
          to="https://discord.gg/kwmkuGjzYu"
          className="bg-secondary hover:bg-primary text-text hover:scale-95 hover:text-background rounded-xl duration-300 flex flex-col items-center justify-center col-span-1"
        >
          <SiDiscord className=" text-8xl" />
        </Link>
        <Link to="/magazin" className={box + " col-span-4"}>
          <h1 className={title}>МАГАЗИН</h1>
          <LuNewspaper className="text-8xl mt-7" />
          <p className={subtitle}>
            Добродошли у наш Магазин, овде делимо не само добре примере и
            студије случаја, већ и свеж и занимљив садржај који обухвата развој,
            дизајн и много више. Уроните у наше причe, будите у току с
            актуелностима, и откријте како Магазин постаје ваша дестинација за
            креативност и информације у свету веб развоја и дизајна.
          </p>
        </Link>
        <Link to="/razvoj" className={box + " col-span-2"}>
          <h1 className={title}>РАЗВОЈ</h1>
          <FaHammer className="text-7xl mt-7" />
          <p className={subtitle}>
            Наши иновативни алати и савети за унапређење веб простора на
            Ћирилици укључују лако пребацивање текста, правилну употребу
            ћириличких линкова и оптимизацију садржаја за најбоље резултате на
            Гоогле-у.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Bento;
