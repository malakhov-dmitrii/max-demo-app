import React from "react";
import { Link } from 'react-router-dom';

const PostItem = (props) => {
  return (
    <div className="posts-item">
      <h2>{props.data.title}</h2>
      <p>{props.data.body}</p>
      <Link to={`/user/${props.data.userId}`}>Go to author page</Link>
    </div>
  );
};

export default PostItem;
