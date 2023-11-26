import React, { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa";
import axios from "axios";

const Fonts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://165.232.125.184:8000/scraper");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-6xl font-bold text-text mt-20 mb-20 tracking-wider">
        ГАЛЕРИЈА ФОНТОВА
      </h1>
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-start mb-14"
          >
            <h1 className="text-3xl text-text mr-5 font-bold tracking-wider">
              {item.linkName}
            </h1>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <FaLink className="text-text text-3xl" />
            </a>
          </div>
        ))}
    </div>
  );
};

export default Fonts;
