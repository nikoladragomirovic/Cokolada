import React, { useState } from "react";
import { LuArrowRightToLine } from "react-icons/lu";

const Cirilizator = () => {
  const letterMap = {
    Lj: "Љ",
    Nj: "Њ",
    E: "Е",
    R: "Р",
    T: "Т",
    Z: "З",
    U: "У",
    I: "И",
    O: "О",
    P: "П",
    Š: "Ш",
    Đ: "Ђ",
    Ž: "Ж",
    A: "А",
    S: "С",
    D: "Д",
    F: "Ф",
    G: "Г",
    H: "Х",
    J: "Ј",
    K: "К",
    L: "Л",
    Č: "Ч",
    Ć: "Ћ",
    Dž: "Џ",
    C: "Ц",
    V: "В",
    B: "Б",
    N: "Н",
    M: "М",
    lj: "љ",
    nj: "њ",
    e: "е",
    r: "р",
    t: "т",
    z: "з",
    u: "у",
    i: "и",
    o: "о",
    p: "п",
    š: "ш",
    đ: "ђ",
    ž: "ж",
    a: "а",
    s: "с",
    d: "д",
    f: "ф",
    g: "г",
    h: "х",
    j: "ј",
    k: "к",
    l: "л",
    č: "ч",
    ć: "ћ",
    dž: "џ",
    c: "ц",
    v: "в",
    b: "б",
    n: "н",
    m: "м",
    Љ: "Lj",
    Њ: "Nj",
    Е: "E",
    Р: "R",
    Т: "T",
    З: "Z",
    У: "U",
    И: "I",
    О: "O",
    П: "P",
    Ш: "Š",
    Ђ: "Đ",
    Ж: "Ž",
    А: "A",
    С: "S",
    Д: "D",
    Ф: "F",
    Г: "G",
    Х: "H",
    Ј: "J",
    К: "K",
    Л: "L",
    Ч: "Č",
    Ћ: "Ć",
    Ѕ: "",
    Џ: "Dž",
    Ц: "C",
    В: "V",
    Б: "B",
    Н: "N",
    М: "M",
    љ: "lj",
    њ: "nj",
    е: "e",
    р: "r",
    т: "t",
    з: "z",
    у: "u",
    и: "i",
    о: "o",
    п: "p",
    ш: "š",
    ђ: "đ",
    ж: "ž",
    а: "a",
    с: "s",
    д: "d",
    ф: "f",
    г: "g",
    х: "h",
    ј: "j",
    к: "k",
    л: "l",
    ч: "č",
    ћ: "ć",
    ѕ: "",
    џ: "dž",
    ц: "c",
    в: "v",
    б: "b",
    н: "n",
    м: "m",
  };

  function transliterate(text) {
    return text
      .split("")
      .map(function (char) {
        return letterMap[char] || char;
      })
      .join("");
  }

  const [inputText, setInputText] = useState("");
  const [formatedText, setFormatedText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setFormatedText(transliterate(inputText));
  };

  const handleButtonClick = () => {
    setFormatedText(transliterate(inputText));
  };

  return (
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-6xl font-bold text-text mt-20 mb-20 tracking-wider">
        ЋИРИЛИЗАТОР
      </h1>
      <textarea
        type="text"
        placeholder="Unesi latinični (или ћирилични) text"
        value={inputText}
        onChange={handleInputChange}
        className=" p-2 text-text outline-2 outline-offset-0 outline outline-text focus:outline-4 focus:outline-accent duration-150 text-xl resize-none align-text-top w-1/2 placeholder-text h-[300px] bg-secondary rounded-md"
      />
      <LuArrowRightToLine
        onClick={handleButtonClick}
        className="text-text text-6xl rotate-90 my-3 hover:scale-110 hover:translate-y-2 duration-150"
      />
      <textarea
        type="text"
        value={formatedText}
        readOnly
        className="mb-20 p-2 text-text outline-2 outline-offset-0 outline outline-text focus:outline-4 focus:outline-accent duration-150 text-xl resize-none align-text-top w-1/2 placeholder-text h-[300px] bg-secondary rounded-md"
      />
    </div>
  );
};

export default Cirilizator;
