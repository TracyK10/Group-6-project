/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
// import "./Highlights.css"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Highlights() {
  
  const [highlights, setHighlights] = useState([]);
  const API_KEY = "9337c7af91cb42c0ba5560f4edc64bb9";

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setHighlights(data.articles);
      })
      .catch(error => {
        console.error("Error fetching highlights:", error);
      });
  }, []);

  return (
    <div className="highlights-container">
      <h2 style={{fontSize:"48px"}}>Kenya News Highlights</h2>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          paddingLeft: 20,
        }}
      >
        {highlights.map((article, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 200,
              width: "30%",
              marginBottom: 20,
              boxShadow: "7px 10px 20px grey",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {article.author}
              </Typography>
              <Typography variant="h5" component="div">
                {article.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {}
              </Typography>
              <Typography variant="body2">{article.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link target="__blank" to={article.url}>Learn More</Link>
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Highlights;