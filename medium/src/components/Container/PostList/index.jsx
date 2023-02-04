import React, { useState, useEffect } from "react";
import PostItem from "./PostItem/index";
import "./index.css";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const API_URL =
    "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=MSVnJFudfgt8BzrJO6s76j7bvGYTG36M";

  useEffect(() => {
    fetchPosts(API_URL);
  }, []);

  const fetchPosts = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const posts = await response.json();
    console.log(posts);
    setPosts(posts.results);
  };

  console.log(posts);

  return (
    <>
      {posts.map((post) => {
        return <PostItem post={post} key={post.id} />;
      })}
    </>
  );
}
