import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width:"15rem"},{height:"30rem"}}>
          <img src={imageUrl}  alt="news_img" style={{height:"250px"}}/>
          <div className="card-body">
            <div className="heading-news" style={{height:"4rem"}}>
            <h5 className="card-title">{title.slice(0,72)}</h5>
            </div>
            <div className="carddesc" style={{height:"5rem"}}>
            <p className="card-text">
             {description.slice(0,120)}....
            </p>
            </div>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary my-3 d-flex justify-content-center align-items-center">
              Read Full Article
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

// use rce for the above snippet
