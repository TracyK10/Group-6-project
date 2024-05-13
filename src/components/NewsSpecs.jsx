/* eslint-disable react/prop-types */
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
  Button
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function NewsSpecs({ news }) {
  return (
    <div style={{ padding: 5 }}>
      <Card style={{ boxShadow: "7px 10px 20px grey" }}>
        <Image src={news.urlToImage} wrapped ui={false} />
        <CardContent>
          <CardHeader>{news.title}</CardHeader>
          <CardMeta>
            Author: <span>{news.author}</span>
          </CardMeta>
          <CardDescription>{news.description}</CardDescription>
        </CardContent>
        <CardContent extra>
          <Link target="__blank" to={news.url}>
            <Button secondary>Learn More</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default NewsSpecs;
