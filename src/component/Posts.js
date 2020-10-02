import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Posts(props) {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const postList = posts.length ? (
    posts.map((post) => {
      return (
        <div className="card" key={post.id}>
          <h4 className="card-header">
            <Link to={"/posts/" + post.id}>{post.title}</Link>
          </h4>
          <p>{post.body}</p>
        </div>
      );
    })
  ) : (
    <div className="center">Not post yet</div>
  );
  return (
    <div className="container">
      <h1>{props.message}</h1>
      {postList}
    </div>
  );
}
