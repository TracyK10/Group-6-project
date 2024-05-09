import { useState, useEffect } from "react"
import NewsItems from "../components/NewsItems";
import Header from "../components/Header";

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
    <>
      <Header />
    <div>
      <h1 style={{textAlign: 'center', textDecoration:'underline'}}>Other News</h1>
      <div  style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', paddingLeft:20}}>
    {
        news.map(article => (
      <NewsItems key={article.id} news={article} />
        ))}
      </div>
      </div>
    </>
  )
}

export default DifferentNews


