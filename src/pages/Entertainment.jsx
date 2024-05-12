import  { useState, useEffect } from "react";
import NewsItems from "../components/NewsItems"; 
import Header from "../components/Header";
import Layout from "../Layout"

const EntertainmentNews = () => {
  const API_KEY = import.meta.env.VITE_SECRET_KEY; 
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEntertainmentNews = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=entertainment&language=en&sortby=publishedAt&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setEntertainmentNews(data.articles);
      setIsLoading(false);
    };

    fetchEntertainmentNews();
  }, [API_KEY]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout >
      <Header />
    <div>
      <h1 style={{fontSize:"48px",textAlign: 'center',}}>Entertainment News</h1>
      <div  style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', paddingLeft:20}}>
        {entertainmentNews.map((article) => (
          <NewsItems key={article.id} news={article} />
        ))}
      </div>
      </div>
    </Layout>
  );
};

export default EntertainmentNews;