
import { useState,useEffect } from 'react'
import './App.css'
import Sports from '../pages/Sports'

function NewsSpecs() {
  
const [news, setArticle] = useState([])

  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=athletics&from=2024-05-07&sortBy=publishedAt&apiKey=582b2ea907044a1faf4d7e1f5f116e82")
    .then(res=>res.json())
    .then(data=>setArticle(data.articles))
  },[])
  console.log(news)
  return (
     <Sports articles={news} />
  )
}

export default NewsSpecs

