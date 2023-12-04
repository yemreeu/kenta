import { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";

const InstagramPosts = () => {
    const [posts, setPosts] = useState([]);
  
    const fetchInstagramPosts = async () => {
      try {
        const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${accessToken}`
        );
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };
  
    const postsWithoutVideos = posts.filter((p) => !p.media_url.includes("video"));
  
    useEffect(() => {
      // Fetch data initially
      fetchInstagramPosts();
  
      // Fetch data every hour (3600000 milliseconds = 1 hour)
      const interval = setInterval(fetchInstagramPosts, 3600000);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div >
        <Carousel
          data={postsWithoutVideos.map((post) => ({ src: post.media_url, alt: post.caption }))}
        />
      </div>
    );
  };
  
  export default InstagramPosts;