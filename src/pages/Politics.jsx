import React, { useState, useEffect } from "react";
import NewsItems from "../components/NewsItems";

const Politics = () => {
  const [page, setPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiKey = "c9318c4d0427a6590c4a955b279cf93b";
    const url = `https://gnews.io/api/v4/top-headlines?category=politics&lang=en&country=us&apikey=${apiKey}`;

    const fetchNewsData = async () => {
      setLoading(true);
      try {
        console.log("Fetching data from:", url);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Received data:", data);
        setNewsData((prevNewsData) => [...prevNewsData, ...data.articles]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [page]); // Fetch data whenever page changes

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container">
      <h1 className="text-center">Politics News</h1>
      <NewsItems newsData={newsData} loading={loading} />
      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={handleLoadMore}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default Politics;
