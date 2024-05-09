import  { useState, useEffect } from "react";
import NewsItems from "../components/NewsItems"; 
import Header from "../components/Header";
const EntertainmentNews = () => {
  const API_KEY = import.meta.env.VITE_SECRET_KEY; 
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEntertainmentNews = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${API_KEY}`
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
    <>
      <Header />
    <div>
      <h1 style={{textAlign: 'center', textDecoration:'underline'}}>Entertainment News</h1>
      <div  style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', paddingLeft:20}}>
        {entertainmentNews.map((article) => (
          <NewsItems key={article.id} news={article} />
        ))}
      </div>
      </div>
    </>
  );
};

export default EntertainmentNews;