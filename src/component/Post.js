import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { deletePost } from '../context/actions/actions';

import { BlogContext } from '../context/BlogContext'

export default function Post() {
  const { post_id } = useParams();
  const id = parseInt(post_id);

  const history = useHistory();

  // const post = useSelector((state) => state.posts.find((p) => p.id === id));

  const { blogState, dispatch } = useContext(BlogContext);
  const post = blogState.posts.find((p) => p.id === id);

  console.log(post);

  // const dispatch = useDispatch();

  const postComponent =
    post !== undefined ? (
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ) : (
      <div className="center">Empty</div>
    );

  const backHandler = () => {
    history.goBack();
  };

  const deleteHandler = () => {
    dispatch(deletePost(id));
    history.push("/posts");
  };
  return (
    <div className="container">
      {postComponent}

      <button className="btn waves-effect amber darken-4" onClick={backHandler}>
        Back
      </button>
      <button
        className="btn waves-effect red accent-3 right"
        onClick={deleteHandler}
      >
        Delete
      </button>
    </div>
  );
}
