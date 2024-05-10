// NewsItems.jsx
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./NewsItems.css";

function NewsItems({ news }) {
  if (!news) {
    return null; // Or display a placeholder/error message
  }

  const { title, description, url, urlToImage, author } = news;
  return (
    <div className="cards">
      <Card
        sx={{
          maxWidth: 345,
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          boxShadow: "7px 10px 20px grey",
          minWidth: 200,
          marginBottom: 10,
        }}
      >
        <CardMedia
          sx={{ height: 180 }}
          image={urlToImage}
          title="news-content"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={url}>
            <Button variant="contained" size="small">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default NewsItems;
