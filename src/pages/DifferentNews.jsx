import { useState, useEffect } from "react"
import NewsItems from "../components/NewsItems";

function DifferentNews() {
  const API_KEY = import.meta.env.VITE_SECRET_KEY;
  const [news, setNews] = useState([]);

useEffect(() => {
  fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => setNews(data.articles)); // setNews with only the articles array
}, [API_KEY]);

  return (
    <div>
      <h1>Other News</h1>
    {
      news.map(article => (
      <NewsItems key={article.id} news={article} />
      ))}
    </div>
  )
}

export default DifferentNews


