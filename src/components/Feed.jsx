import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import axios from "axios";

const Feed = () => {
  const box = "bg-secondary rounded-xl duration-300 hover:scale-95";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/publication" +
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
      <h1 className="text-6xl font-bold tracking-wider text-center mt-20 text-text hover:animate-shake">
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
                <span className="m-5 mb-0 text-center text-3xl font-bold tracking-wider text-text">
                  {item.title}
                </span>
                <a
                  className="text-text"
                  onClick={stopPropagation}
                  href={item.link}
                >
                  <FaLink className="text-4xl hover:scale-[1.4]  duration-200" />
                </a>
                <span className="mx-10 text-text text-lg">
                  {item.description}
                </span>
                <div className="flex flex-row text-sm items-center justify-center rounded-2xl p-4 m-8 mt-0 text-background bg-text">
                  <span className="mr-4">{item.author}</span>
                  <span>{item.displayDate}</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
