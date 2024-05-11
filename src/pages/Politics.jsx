import React, { useState, useEffect } from 'react';
import NewsItems from '../components/NewsItems';
import '../App.css';

const Politics = () => {
  const [page, setPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiToken = 'c9318c4d0427a6590c4a955b279cf93b';
    const url = `https://gnews.io/api/v4/top-headlines?category=politics&lang=en&country=us&apikey=${apiToken}&page=${page}`;

    const fetchNewsData = async () => {
      setLoading(true);
      try {
        console.log('Fetching data from:', url);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Received data:', data);
        setNewsData(prevNewsData => [...prevNewsData, ...data.articles]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [page]); // Fetch data whenever page changes

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="container">
      <h1 className="text-center">Politics News</h1>
      <div className="news-container">
        {newsData.map((article, index) => (
          <div key={index} className="news-item">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read Full Article
            </a>
          </div>
        ))}
        <button onClick={handleLoadMore} className="load-more-btn" disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  );
};

export default Politics;
