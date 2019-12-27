import React, {Component} from "react"
import "./style.css"

class Article extends Component {
    render() {
        const {article} = this.props;

        return (
            <div className="card" style = {{width: "500px"}}>
                <div className="card-body">
                    <div className="img-thumbnail">
                        <img className="crop_ad rounded" src={article.previewImage} />
                    </div>
                    <hr/>
                    <h4 className="card-title">{article.title}</h4>
                    <p className="card-text">{article.price}</p>
                    <div className="card-title text-muted small">
                        <address>
                            {article.address}
                        </address>
                    </div>
                    <a href={"/description/" + article.id} className="card-link">подробнее</a>
                </div>
            </div>
        )
    }
}



export default Article
