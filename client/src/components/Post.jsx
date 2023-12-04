import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


const Post = ({ _id,content, cover, summary, title, createdAt, author }) => {
  const inputDate = new Date(createdAt);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  const outputDateString = inputDate.toLocaleString("en-US", options);
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          {" "}
          <img src={"https://kenta-mern-api.vercel.app/post/" + cover} alt=""></img>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>

        <p className="info">
          <a className="author">Yazar: {author.username}</a>
          <time>{outputDateString}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
