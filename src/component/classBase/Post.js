import React, { Component } from "react";
import { connect } from "react-redux";

import { deletePost } from "../../redux/actions/actions";

class Post extends Component {
    
    backHandler = () => {
      this.props.history.goBack();
    };

  deleteHandler = () => {
    this.props.deletePost(this.props.id);
    // console.log(this.props)
    this.props.history.push("/posts");
  };

  render() {
    const postComponent =
      this.props.post !== undefined ? (
        <div>
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.body}</p>
        </div>
      ) : (
        <div className="center">Empty</div>
      );

    return (
      <div className="container">
        {postComponent}

        <button
          className="btn waves-effect amber darken-4"
          onClick={this.backHandler}
        >
          Back
        </button>
        <button
          className="btn waves-effect red accent-3 right"
          onClick={this.deleteHandler}
        >
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, own) => {
  const id = parseInt(own.match.params.post_id);
  return {
    post: state.posts.find((p) => p.id === id),
    id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
