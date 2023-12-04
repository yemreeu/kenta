import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import ClipLoader from "react-spinners/ClipLoader";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://kenta-be.vercel.app/post")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Bloglar</h1>
      <br />
      {loading ? (
        <div>
          <ClipLoader
            color={"B06161"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p>Loading ...</p>
        </div>
      ) : (
        posts.length > 0 &&
        posts.map((post, index) => <Post key={index} {...post} />)
      )}
    </div>
  );
};

export default IndexPage;
