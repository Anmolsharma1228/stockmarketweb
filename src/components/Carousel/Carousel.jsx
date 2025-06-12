import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { Link } from "react-router-dom";

const Carousels = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const stockData = async () => {
      try {
        const response = await axios.get(
          "https://news-api65.p.rapidapi.com/api/v1/crypto/historical_articles",
          {
            headers: {
              "x-rapidapi-key":
                "53856e8622mshf4f81d1d7f29d55p14114fjsn82cac1895aed",
              "x-rapidapi-host": "news-api65.p.rapidapi.com",
            },
          }
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log("Error fetching stock data:", error);
      }
    };
    stockData();
  }, []);

  return (
    <div className="product relative pt-[80px] lg:pt-[75px] z-0">
      <Carousel
        className="shadow-2xl mx-auto w-full"
        showThumbs={false}
        autoPlay={true}
        transitionTime={500}
        infiniteLoop={true}
        showStatus={false}
      >
        {data.slice(4, 10).map((data) => {
          return (
            <Link to="" className="relative" key={data.id}>
              <img
                src={data.media}
                className="w-full h-[150px] md:h-[280px] lg:h-[550px] rounded-md"
              />
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carousels;
