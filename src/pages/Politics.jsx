import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Politics = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      const options = {
        method: 'POST',
        url: 'https://newsnow.p.rapidapi.com/newsv2',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '5c1f8994d6msh7876da716b93a7ap19efc3jsne1e5b274854d',
          'X-RapidAPI-Host': 'newsnow.p.rapidapi.com',
        },
        data: {
          query: 'AI',
          time_bounded: true,
          from_date: '01/02/2021',
          to_date: '05/06/2021',
          location: 'us',
          language: 'en',
          page: 1,
        },
      };

      try {
        const response = await axios.request(options);
        setNewsData(response.data);
      } catch (error) {
        console.error('Error fetching news data:', error);
        setError('Error fetching news data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div>
      <h1>Politics Page</h1>
      {loading && <p>Loading news data...</p>}
      {error && <p>{error}</p>}
      <ul>
        {!loading &&
          !error &&
          newsData.map((article) => (
            <li key={article.id} style={{ marginBottom: '10px' }}>
              <strong>{article.title}</strong>
              <p>{article.description}</p>
              <p>Author: {article.author}</p>
              <p>Published: {article.publishedAt}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Politics;
