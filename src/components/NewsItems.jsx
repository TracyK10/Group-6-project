// NewsItems.jsx
import React from 'react';

const NewsItems = ({ newsData, loading }) => {
  const handleLearnMore = (url) => {
    window.open(url, '_blank'); // Open article link in a new tab
  };

  if (loading) {
    return <p>Loading...</p>; // Display a loading indicator
  }

  return (
    <div>
      {newsData.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button
            className="btn btn-info"
            onClick={() => handleLearnMore(item.url)}
          >
            Learn More
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default NewsItems;
