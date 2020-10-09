import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Posts extends Component {
  render() {
    console.log(this.props.posts);
    const {posts} = this.props;
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
        <h1>{this.props.message}</h1>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(Posts);
