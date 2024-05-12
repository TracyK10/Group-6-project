import { useState, useEffect } from 'react';
import NewsItems from '../components/NewsItems';
import '../App.css';
import Layout from '../Layout';
import Header from "../components/Header"

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
    <Layout>
      <Header />
    <div className="container">
      <h1 style={{fontSize:"48px"}} className="text-center">Politics News</h1>
      <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', paddingLeft:20}}>
        {newsData.map((article, index) => (
          <NewsItems key={index} news={article} />
        ))}
        </div>
        <button onClick={handleLoadMore} className="load-more-btn" disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      
    </div>
    </Layout>
  );
};

export default Politics;