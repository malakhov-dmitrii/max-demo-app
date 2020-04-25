import React, { useState, useEffect } from "react";
import PostItem from "../PostItem";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);
  return (
    <div>
      <h1>Posts List</h1>

      {!posts.length && "Пока ниче нет"}

      {posts.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
    </div>
  );
};

export default PostsList;
