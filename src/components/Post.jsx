import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(category);
      const response = await axios.post(
        "http://165.232.125.184:8000/publication/create",
        {
          category,
          title,
          description,
          link,
          text,
          author,
        }
      );

      console.log("great success", response);
    } catch (err) {
      console.log("error submitting report");
    } finally {
      setTitle("");
      setAuthor("");
      setLink("");
      setDescription("");
      setText("");
      setCategory("");
      navigate("/" + category);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-5xl font-bold text-text mt-10 tracking-wider">
        НАПРАВИ ПОСТ
      </h1>
      <div className="flex flex-row items-center justify-between w-1/2">
        <textarea
          className="w-2/3 mr-5 p-2 text-text h-11 resize-none text-xl mt-10 bg-secondary outline outline-offset-0 outline-text outline-2 focus:outline-4 focus:outline-accent duration-150 placeholder-text rounded-md"
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Наслов"
          value={title}
        ></textarea>
        <textarea
          className="p-2 text-text h-11 resize-none text-xl mt-10 bg-secondary outline outline-offset-0 outline-text outline-2 focus:outline-4 focus:outline-accent duration-150 placeholder-text rounded-md"
          onChange={(event) => setAuthor(event.target.value)}
          placeholder="Ваше име"
          value={author}
        ></textarea>
      </div>
      <div className="flex w-1/2 flex-row items-center justify-around">
        <select
          className="p-3 text-text text-xl mt-10 mr-10 bg-secondary outline outline-offset-0 outline-text outline-2 focus:outline-4 focus:outline-accent duration-150 placeholder-text rounded-md"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        >
          <option value="">Категорија</option>
          <option value="resursi">Ресурси</option>
          <option value="razvoj">Развој</option>
          <option value="dizajn">Дизајн</option>
          <option value="magazin">Magazin</option>
        </select>
        <textarea
          className="p-2 w-3/4 h-11 text-text resize-none text-xl mt-10 bg-secondary outline outline-offset-0 outline-text outline-2 focus:outline-4 focus:outline-accent duration-150 placeholder-text rounded-md"
          onChange={(event) => setLink(event.target.value)}
          placeholder="Линк до ресурса"
          value={link}
        ></textarea>
      </div>
      <textarea
        className="w-1/2 p-2 text-text resize-none text-xl my-10 bg-secondary outline outline-offset-0 outline-text outline-2 focus:outline-4 focus:outline-accent duration-150 placeholder-text rounded-md"
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Кратак опис"
        value={description}
      ></textarea>
      <textarea
        className="p-2 text-text outline-2 outline-offset-0 outline outline-text focus:outline-4 focus:outline-accent duration-150 text-xl resize-none align-text-top w-1/2 placeholder-text h-[450px] bg-secondary rounded-md"
        onChange={(event) => setText(event.target.value)}
        placeholder=""
        value={text}
      ></textarea>
      <button
        onClick={handleSubmit}
        className="mb-20 mt-10 py-2 text-lg p-5 bg-text rounded-xl text-background"
      >
        ПОСТАВИ
      </button>
    </div>
  );
};

export default Post;
