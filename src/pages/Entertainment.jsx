import  { useState, useEffect } from "react";
import NewsItem from "../components/NewsItem"; 
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
    <div>
      <h1>Entertainment News</h1>
      <div>
        {entertainmentNews.map((article) => (
          <NewsItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default EntertainmentNews;
