import React, { Component } from "react";

export default class PageNumber extends Component {
  render() {
    return (
      <button onClick={this.props.showPageHandler}>
        {this.props.pageNumber}
      </button>
    );
  }
}
