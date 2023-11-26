import React, { useState } from "react";

const DecapitalizeForm = () => {
  const letterMap = {
    A: "А",
    B: "Б",
    C: "Ц",
    D: "Д",
    E: "Е",
    F: "Ф",
    G: "Г",
    H: "Х",
    I: "И",
    J: "Ј",
    K: "К",
    L: "Л",
    M: "М",
    N: "Н",
    O: "О",
    P: "П",
    Q: "Ћ",
    R: "Р",
    S: "С",
    T: "Т",
    U: "У",
    V: "В",
    W: "Џ",
    X: "КС",
    Y: "Ј",
    Z: "З",
    a: "а",
    b: "б",
    c: "ц",
    d: "д",
    e: "е",
    f: "ф",
    g: "г",
    h: "х",
    i: "и",
    j: "ј",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    q: "ћ",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    v: "в",
    w: "џ",
    x: "кс",
    y: "ј",
    z: "з",
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
      .toLowerCase()
      .split("")
      .map(function (char) {
        return letterMap[char] || char;
      })
      .join("");
  }

  const [inputText, setInputText] = useState("");
  const [decapitalizedText, setDecapitalizedText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    setDecapitalizedText(transliterate(inputText));
  };

  return (
    <div>
      <label>
        Input Text:
        <input type="text" value={inputText} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Decapitalized Text:
        <input type="text" value={decapitalizedText} readOnly />
      </label>
      <br />
      <button onClick={handleButtonClick}>Decapitalize</button>
    </div>
  );
};

export default DecapitalizeForm;
