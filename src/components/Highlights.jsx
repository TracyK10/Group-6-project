import React, { useState, useEffect } from "react";

function Highlights() {
  const [highlights, setHighlights] = useState([]);
  const API_KEY = "9337c7af91cb42c0ba5560f4edc64bb9";

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
        const data = await response.json();
        setHighlights(data.articles);
      } catch (error) {
        console.error("Error fetching highlights:", error);
      }
    };

    fetchHighlights();
  }, []);

  return (
    <div className="highlights-container">
      <h2>News Highlights</h2>
      <ul>
        {highlights.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Highlights;

}

export default Highlights;
