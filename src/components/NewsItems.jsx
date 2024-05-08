
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NewsItems({ news }) {
  // eslint-disable-next-line react/prop-types
  const { title, description, url, urlImage, author } = news;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={urlImage} />
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={url}>
          <Button variant="primary">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default NewsItems;
