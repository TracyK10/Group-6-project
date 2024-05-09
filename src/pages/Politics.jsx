import { useState, useEffect, useCallback } from "react";
import NewsItems from "../components/NewsItems";
import Header from "../components/Header";

const Politics = () => {
  const [page, setPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY; // Retrieve API key from environment variables
  console.log("API Key:", apiKey);
  
  const fetchNewsData = useCallback(async () => {
    const pageSize = 10; // Number of articles per page
    const url = `https://newsdata.io/api/1/news?apikey=pub_438278c5e9203bb36296fedef79f591c3a9f8&q=pegasus&language=en`;

    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setNewsData(prevNewsData => [...prevNewsData, ...data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [page, apiKey]); // Fetch data whenever page or apiKey changes

  useEffect(() => {
    fetchNewsData();
  }, [fetchNewsData]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Header />
    <div className="container">
      <h1 className="text-center">Politics News</h1>
      <NewsItems news={newsData} loading={loading} />
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
    </>
  );
};

export default Politics;
