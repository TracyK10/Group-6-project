import React, { useState, useEffect } from 'react';

const Entertainment = () => {
  const [entertainmentArticles, setEntertainmentArticles] = useState([]);
  const [isLoadingEntertainment, setIsLoadingEntertainment] = useState(true);

  useEffect(() => {
    const fetchEntertainmentData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=7fecd367c446449193b8d3e459ca5f69`
        );
        if (!response.ok) {
          throw new Error('Error fetching entertainment data');
        }
        const data = await response.json();
        setEntertainmentArticles(data.articles.slice(0, 5));
        setIsLoadingEntertainment(false);
      } catch (error) {
        console.error('Error fetching entertainment news:', error);
        setIsLoadingEntertainment(false);
      }
    };

    fetchEntertainmentData();
  }, []);

  const handleAddEntertainmentArticle = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New Entertainment Article',
          body: 'Lorem ipsum dolor sit amet...',
          userId: 1, // Sample userId for the post
        }),
      });
      if (!response.ok) {
        throw new Error('Error adding entertainment article');
      }
      const data = await response.json();
      setEntertainmentArticles([...entertainmentArticles, data]);
    } catch (error) {
      console.error('Error adding entertainment article:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Entertainment News</h2>
      <button className="addEntertainment" onClick={handleAddEntertainmentArticle}>Add Article</button>
      {isLoadingEntertainment ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group">
          {entertainmentArticles.map((article, index) => (
            <li key={index} className="list-group-item">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank"rel="noopener noreferrer">
                Read more
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Entertainment;
