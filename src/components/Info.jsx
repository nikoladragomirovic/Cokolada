import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLink } from "react-icons/fa";

const Info = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://165.232.125.184:8000/publication/" +
            location.pathname.replace(/^\/info\//, "")
        );
        setData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center mt-16">
        <a
          className="bg-secondary p-5 rounded-xl text-3xl text-text mr-4"
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
      <p className="text-text mx-40 text-lg text-center mt-12 mb-20">
        {data && data.text}
      </p>
    </div>
  );
};

export default Info;
