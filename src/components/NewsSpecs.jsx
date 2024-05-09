/* eslint-disable react/prop-types */

function NewsSpecs({ news }) {
  return (
    <div>
      <h3>{news.title}</h3>
      <img src={news.urlToImage} alt={news.title} />
      <h4>
        Author: <span>{news.author}</span>
      </h4>
      <p>{ news.description}</p>
    </div>
  );
}

export default NewsSpecs;
