function Sports({articles}) {

  return (
    <div className="bracket-div">
        <div>
            {articles.map((article, index)=>{
                return (<div key={index} >
                    <h3>{article.title}</h3>
                    <img src ={article.urlToImage} alt={article.title}/>
                    <h4>Author: <span>{article.author}</span></h4>
                    <p>Will put some paragraph here...</p>
                    </div>)
            })}
        </div>
    </div>
  )
}

export default Sports