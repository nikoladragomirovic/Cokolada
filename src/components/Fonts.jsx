import React, { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa";
import axios from "axios";
import { IoRefreshCircle } from "react-icons/io5";

const Fonts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDataAndPost = async () => {
    setLoading(true);
    try {
      await axios.post("http://165.232.125.184:8000/scraper");
      await fetchData();
    } catch (error) {
      console.error("Error fetching and posting data:", error);
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async () => {
    setLoading(true);
    await fetchDataAndPost();
  };

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
  }, [fetchDataAndPost]);

  return (
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-6xl font-bold text-text mt-20 mb-5 tracking-wider">
        ГАЛЕРИЈА ФОНТОВА
      </h1>
      <IoRefreshCircle
        onClick={refreshData}
        className="text-text text-5xl mb-10"
      />
      {data &&
        data
          .slice()
          .reverse()
          .map((item, index) => (
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
