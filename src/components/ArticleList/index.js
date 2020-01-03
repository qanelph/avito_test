import React from "react";
import Article from "../Article";
import "./style.css"

export default function ArticleList({ articles }) {
    const tempElements = articles.map(article =>
            <li className="article-list__li" key = {article.id}><Article article = { article }/></li>)

    var articleElements = [];
    for (var i = 0; i < tempElements.length; i = i + 2)
    {
        articleElements.push(
            <div className="container">
                <div className="row">
                    <li className="article-list__li">{tempElements[i]}</li>
                    <li className="article-list__li">{tempElements[i + 1]}</li>
                </div>
                <hr/>
            </div>);
    }
    // console.log(articleElements);

    return (
        <ul>
            {articleElements}
        </ul>
    )
}
