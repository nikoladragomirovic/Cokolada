import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Feed = () => {
  const box = "bg-secondary rounded-xl duration-300";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.26:8000/publication/Magazin/10/desc"
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getNextColSpan = (index) => {
    const cycle = [4, 2, 2, 4];
    return cycle[index % cycle.length];
  };

  return (
    <div className="max-w-screen-xl mx-auto duration-300 my-20">
      <div className="grid auto-rows-[450px] grid-cols-6 gap-4">
        {data &&
          data.map((item, index) => (
            <Link
              to="/info"
              key={index}
              className={`${box} col-span-${getNextColSpan(
                index
              )} flex flex-row items-start justify-center`}
            >
              <h1>{item.title}</h1>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Feed;
