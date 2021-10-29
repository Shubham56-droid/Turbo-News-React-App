import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt,source} =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ height: "36rem" }}>
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:'1'}}>
                   <h6>{source}</h6>
                  <span class="visually-hidden">unread messages</span>
          </span>
          <img src={imageUrl} alt="news_img" style={{ height: "250px" }} />
          <div className="card-body">
            <div className="heading-news" style={{ height: "6.5rem" }}>
              <h5 className="card-title">
                {title}
              </h5>
            </div>
            <div className="carddesc" style={{ height: "7rem" }}>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-muted">
                  by {author} on {new Date(publishedAt).toGMTString()}
                </small>
              </p>
            </div>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn  btn-primary my-3 d-flex justify-content-center align-items-center"
            >
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
