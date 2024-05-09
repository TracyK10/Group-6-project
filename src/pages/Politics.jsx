import React, { useState, useEffect, useCallback } from 'react';
import NewsItems from "../components/NewsItems";
 const API_KEY = process.env.API_KEY;

const Politics = () => {
  const [page, setPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchNewsData = useCallback(async () => {
    const pageSize = 10; // Number of articles per page
    const url = `https://newsapi.org/v2/top-headlines?q=politics&country=us&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;

    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setNewsData(prevNewsData => [...prevNewsData, ...data.articles]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [page, API_KEY]); // Fetch data whenever page or API_KEY changes

  useEffect(() => {
    fetchNewsData();
  }, [fetchNewsData]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="container">
      <h1 className="text-center">Politics News</h1>
      <NewsItems newsData={newsData} loading={loading} />
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleLoadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  );
};

export default Politics;