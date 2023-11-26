import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import axios from "axios";

const Feed = () => {
  const box = "bg-secondary rounded-xl duration-300";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.26:8000/publication" +
            location.pathname +
            "/100/" +
            order
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
  }, [location.pathname, order]);

  const getNextColSpan = (index) => {
    const cycle = [4, 2, 2, 4];
    return cycle[index % cycle.length];
  };

  const handleClick = (order) => {
    setOrder(order == "asc" ? "desc" : "asc");
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const getTitle = () => {
    switch (location.pathname) {
      case "/razvoj":
        return "РАЗВОЈ";
      case "/dizajn":
        return "ДИЗАЈН";
      case "/resursi":
        return "РЕСУРСИ";
      case "/magazin":
        return "МАГАЗИН";
      default:
        return "РЕСУРСИ";
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-6xl font-bold tracking-wider text-center mt-20 text-text">
        {getTitle()}
      </h1>
      <button className="text-xl text-text" onClick={() => handleClick(order)}>
        {order == "asc" ? "Растуће" : "Опадајуће"}
      </button>
      <div className="max-w-screen-xl mx-auto duration-300 my-20">
        <div className="grid auto-rows-[450px] grid-cols-6 gap-4">
          {data &&
            data.map((item, index) => (
              <Link
                to={"/info/" + item._id}
                key={index}
                className={`${box} col-span-${getNextColSpan(
                  index
                )} flex flex-col items-center justify-around`}
              >
                <span className="m-5 mb-3 text-center text-3xl font-bold tracking-wider text-text">
                  {item.title}
                </span>
                <a
                  className="bg-primary p-3 rounded-md mb-3 text-background"
                  onClick={stopPropagation}
                  href={item.link}
                >
                  <FaLink className="text-2xl" />
                </a>
                <span className="mx-10 mb-2 text-text">{item.description}</span>
                <div className="flex flex-col items-center justify-center px-5 py-3 rounded-md mb-5 bg-accent">
                  <span className="text-xl text-text">{item.author}</span>
                  <span className="text-text text-xl">{item.displayDate}</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
