import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{height:"36rem"}}>
          <img src={imageUrl}  alt="news_img" style={{height:"250px"}}/>
          <div className="card-body">
            <div className="heading-news" style={{height:"6.5rem"}}>
            <h5 className="card-title">{title}</h5>
            </div>
            <div className="carddesc" style={{height:"7rem"}}>
            <p className="card-text">
             {description}....
            </p>
            </div>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn  btn-primary my-3 d-flex justify-content-center align-items-center">
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
