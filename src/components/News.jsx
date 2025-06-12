import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // loader state

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          "https://real-time-finance-data.p.rapidapi.com/stock-news",
          {
            params: {
              symbol: "AAPL:NASDAQ",
              language: "en",
            },
            headers: {
              "x-rapidapi-key":
                "53856e8622mshf4f81d1d7f29d55p14114fjsn82cac1895aed",
              "x-rapidapi-host": "real-time-finance-data.p.rapidapi.com",
            },
          }
        );
        setNews(res?.data?.data?.news || []);
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false); // stop loader
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="my-10 px-4">
      <h2 className="text-2xl font-semibold mb-4">Live Market News</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(news) &&
            news.map((item, idx) => (
              <div key={idx} className="bg-white shadow rounded p-3">
                <img
                  src={item.article_photo_url}
                  alt={item.article_title}
                  className="w-full h-40 object-cover mb-2 rounded"
                />
                <p className="text-sm text-gray-600">
                  {item.article_title?.slice(0, 100)}...
                </p>
                <Link
                  to={item.article_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 text-sm"
                >
                  Read More
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default News;
