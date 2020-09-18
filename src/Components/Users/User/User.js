import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post/Post";

import "./User.scss";

export default function User(props) {
  const [styleTitle, setStyleTitle] = useState({
    color: "red",
    backgroundColor: "pink",
    textAlign: "center",
  });

  const [userPosts, setUserPosts] = useState(null);
  const [userPostToggler, setUserPostToggler] = useState(true);


  const titleClick = () => {
    setStyleTitle({
      color: "blue",
      backgroundColor: "pink",
      textAlign: "center",
    });
  };

  let userPostsElement = null;

  const showPostHandler = (id) => {
    console.log(userPostToggler);
    if (userPostToggler) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => {
          setUserPosts(response.data);
          setUserPostToggler(false);
        });
    } else {      
      setUserPosts(null);
      setUserPostToggler(true);
    }
  };

  return (
    <div className="user">
      <h2 style={styleTitle} onClick={titleClick}>
        {props.name}
      </h2>
      <h4>{props.username}</h4>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <button
        onClick={() => {
          showPostHandler(props.id);
        }}
      >
        Show Post
      </button>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {userPosts !== null
          ? userPosts.map((post) => {
              return <Post key={post.id} title={post.title} body={post.body} />;
            })
          : null}
        {/* {userPostsElement} */}
      </div>
    </div>
  );
}
