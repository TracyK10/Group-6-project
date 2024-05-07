// Politics.js
import React, { useState, useEffect } from 'react';

const Politics = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();
        setArticles(data.slice(0, 5));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching politics news:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddArticle = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New Article',
          body: 'Lorem ipsum dolor sit amet...',
          userId: 1, // Sample userId for the post
        }),
      });
      if (!response.ok) {
        throw new Error('Error adding article');
      }
      const data = await response.json();
      setArticles([...articles, data]);
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Politics News</h2>
      <button className="btn btn-primary mb-3" onClick={handleAddArticle}>Add Article</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group">
          {articles.map(article => (
            <li key={article.id} className="list-group-item">
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Politics;
