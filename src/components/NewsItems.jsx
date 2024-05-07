import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function NewsItems() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{/*card title*/}</Card.Title>
        <Card.Text>{/*card text*/}</Card.Text>
        <Button variant="primary">
          <Link to={"/othernews"}>Go somewhere</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NewsItems;
