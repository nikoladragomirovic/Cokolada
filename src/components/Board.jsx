import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Board = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://165.232.125.184:8000/report");
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

  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <h1 className="text-5xl font-bold text-text mt-10 tracking-wider mb-14">
        РЕПОРТ БОРД
      </h1>
      {data &&
        data
          .slice()
          .reverse()
          .map((report, index) => (
            <div key={index} className="w-1/2 p-4 bg-secondary rounded-lg mb-4">
              <h2 className="text-2xl font-bold tracking-wider text-text">
                {report.email}
              </h2>
              <p className="text-text">{report.text}</p>
            </div>
          ))}
    </div>
  );
};

export default Board;
