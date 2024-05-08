import React, { useState, useEffect } from 'react';


const Politics = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchNewsData = async () => {
      const API_KEY = 'a460f9a4e3ec42e4a683de26c6c7ab57';
      const pageSize = 10; // Number of articles per page
      const url = `https://newsapi.org/v2/top-headlines?q=politics&country=us&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;

      try {
        const response = await axios.get(url);
        const newData = response.data.articles;
        setNewsData((prevData) => [...prevData, ...newData]); // Append new data to existing data
      } catch (error) {
        console.error('Error fetching news data:', error);
        setError('Error fetching news data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [page]); // Fetch data whenever page changes

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Increment page to fetch more articles
  };

  return (
    <div>
      <h1>Politics Page</h1>
      {loading && <p>Loading news data...</p>}
      {error && <p>{error}</p>}
      <ul>
        {!loading &&
          !error &&
          newsData.map((article, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <strong>{article.title}</strong>
              <p>{article.description}</p>
              <p>Author: {article.author || 'Unknown'}</p>
              <p>Published: {new Date(article.publishedAt).toLocaleString()}</p>
            </li>
          ))}
      </ul>
      {!loading && !error && (
        <button onClick={handleLoadMore} style={{ marginTop: '20px' }}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Politics;
