import React from "react";
import "./index.css";

export default function PostItem(props) {
  const {byline, title, abstract, multimedia, published_date, item_type, org_facet} = props.post;
  return (
    <div key={props.key}>
      <div className="left-part">
        <div className="post-header">
          <img
            src={multimedia[0].url}
            alt="author-image"
            className="author-image"
          />
          <p className="post-header-paragraph">
            <span className="author-name">{byline}</span> in{" "}
            <span className="topic-name" style={{marginRight: '1rem'}}>
              &#8226 {org_facet}
            </span>{" "}
            {published_date}
          </p>
        </div>
        <div className="post-body">
          <h1>{title}</h1>
          <p>{abstract}</p>
        </div>
        <div className="post-footer">
          <div className="tag">
            <p>{item_type}</p>
          </div>
          <p>
            <span style={{color: 'black', marginRight: '0.5rem', marginLeft: '0.5rem'}}>
              &#8226
            </span>{" "}
            Selected for you
          </p>
        </div>
      </div>

      <div className="right-part">
        <img src={multimedia[0].url} alt="post-image" className="post-image" />
      </div>
    </div>
  );
}
