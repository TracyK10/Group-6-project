import { useState, useEffect } from "react";

function Highlights() {
  const [highlights, setHighlights] = useState([]);
  const API_KEY = "9337c7af91cb42c0ba5560f4edc64bb9";

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=ke&apiKey=${API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setHighlights(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching highlights:", error);
      });
  }, []);

  return (
    <div className="highlights-container">
      <h2>Kenya News Highlights</h2>
      <ul>
        {highlights.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Highlights;
