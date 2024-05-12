/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import "../App.css";
import NewsSpecs from "../components/NewsSpecs";
import Header from "../components/Header";
import Layout from "../Layout"

function Sports() {
  const [news, setArticle] = useState([]);
  

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=athletics&from=2024-05-07&sortBy=publishedAt&apiKey=582b2ea907044a1faf4d7e1f5f116e82"
    )
      .then((res) => res.json())
      .then((data) => setArticle(data.articles));
  }, []);

  return (
    <Layout >
      <Header />
      <h1 style={{fontSize:"48px"}}>Sports News</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          paddingLeft: 20,
        }}
        className="bracket-div"
      >
        {news.map((article, index) => (
          <NewsSpecs news={article} key={index} />
        ))}
      </div>
    </Layout>
  );
}

export default Sports;
