import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://kenta-mern-api.vercel.app/post").then((response) => {
      response.json().then((posts) => setPosts(posts));
    });
  }, []);
  return (
    <div>
      <h1>Bloglar</h1>
      <br />
      {posts.length > 0 && posts.map((post,index) => (
        <Post key={index} {...post}/>
      ))}
    </div>
  );
};

export default IndexPage;
