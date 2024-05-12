import { useState, useEffect } from "react";
import NewsItems from "../components/NewsItems";
import Header from "../components/Header";
import Layout from "../Layout"

function BusinessFinance() {
 const API_KEY = import.meta.env.VITE_SECRET_KEY;
  const [business, setBusiness] = useState([]);

 useEffect(() => {
   fetch(
     `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`
   )
     .then((res) => res.json())
     .then((data) => setBusiness(data.articles)); // setNews with only the articles array
 }, [API_KEY]);

  return (
    <Layout >
      <Header />
      <div>
        <h2 style={{fontSize:"48px"}}>Business & Finance</h2>
        <p>
          Welcome to the Business & Finance section of our website. Here, you
          will find valuable information, news, and insights related to business
          and finance.
        </p>

        <h3>Latest Business News</h3>
        <ul
          key={business.id}
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            paddingLeft: 20,
          }}
        >
          {business.map((article) => (
            <NewsItems key={article.id} news={article} />
          ))}
        </ul>

        <h3>Financial Tips</h3>
        <p>Here are some tips to help you manage your finances effectively:</p>
        <ul style={{listStyle: 'none'}}>
          <li>Tip 1: Budgeting</li>
          <li>Tip 2: Investing wisely</li>
          <li>Tip 3: Saving for retirement</li>
        </ul>
      </div>
    </Layout>
  );
}

export default BusinessFinance;
