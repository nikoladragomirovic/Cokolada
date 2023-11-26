import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLink } from "react-icons/fa";
import { BiSolidComment } from "react-icons/bi";

const Info = () => {
  const [data, setData] = useState(null);
  const [com, setCom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://165.232.125.184:8000/publication/" +
            location.pathname.replace(/^\/info\//, "")
        );
        setData(response.data[0]);
        setCom(response.data[0].comments);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [com]);

  const sendData = async () => {
    try {
      const response = await axios.post(
        "http://165.232.125.184:8000/publication/comment",
        {
          _id: location.pathname.replace(/^\/info\//, ""),
          username: username,
          comment: commentText,
        }
      );

      setUsername("");
      setCommentText("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="flex flex-row items-center mt-16">
        <a
          className="bg-secondary p-5 rounded-xl text-3xl text-text mr-4 hover:scale-110 duration-200"
          href={data && data.link}
        >
          <FaLink />
        </a>
        <div className="flex flex-row items-center justify-around text-xl bg-secondary p-6 rounded-xl text-text">
          <p className="mr-5">{data && data.author}</p>
          <p>{data && data.displayDate}</p>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-text mt-10 tracking-wider">
        {data && data.title}
      </h1>
      <p className="text-text mx-40 text-lg text-center mt-12 mb-12">
        {data && data.text}
      </p>
      <div className="w-1/2 p-4 bg-secondary rounded-lg mb-10">
        <h2 className="text-2xl font-bold tracking-wider text-text">
          Коментариши
        </h2>
        <div className="w-full flex flex-row items-center justify-around">
          <textarea
            className="p-2 text-text outline-2 h-10 outline-offset-0 outline outline-text focus:outline-4 focus:outline-accent duration-150 text-md resize-none align-text-top w-full placeholder-text bg-background rounded-md my-4"
            placeholder="Ваше име"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></textarea>
          <BiSolidComment
            onClick={sendData}
            className="text-text text-4xl mx-5 hover:text-6xl duration-200"
          />
        </div>
        <textarea
          className="p-2 text-text outline-2 outline-offset-0 outline outline-text focus:outline-4 focus:outline-accent duration-150 text-md resize-none align-text-top w-full placeholder-text bg-background rounded-xl"
          placeholder="Ваш коментар"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
      </div>
      {com &&
        com
          .slice()
          .reverse()
          .map((comment, index) => (
            <div key={index} className="w-1/2 p-4 bg-secondary rounded-lg mb-4">
              <h2 className="text-2xl font-bold tracking-wider text-text">
                {comment.username}
              </h2>
              <p className="text-text">{comment.comment}</p>
            </div>
          ))}
    </div>
  );
};

export default Info;
