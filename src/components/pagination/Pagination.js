import React, { Component } from "react";
import PageNumber from "./pageNumber/PageNumber";

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.currentPage = this.props.currentPage;
    this.pageNumberElement = [];
    this.createPageNumbers();
  }
  MAX_PAGE = Math.ceil(this.props.listCount / this.props.pageItems);
  isAtFirst = () => this.currentPage === 1;
  isAtEnd = () => this.currentPage === this.MAX_PAGE;

  createPageNumbers = () => {
    for (let pageNo = 1; pageNo <= this.MAX_PAGE; pageNo++) {
      this.pageNumberElement.push(
        <PageNumber
          key={pageNo}
          pageNumber={pageNo}
          showPageHandler={() => {
            this.currentPage = pageNo;
            this.props.changePageHandler(pageNo);
          }}
        />
      );
    }
  };
  prevPageHandler = () => {
    if (this.isAtFirst()) {
      return;
    }
    this.currentPage--;

    this.props.changePageHandler(this.currentPage);
  };
  nextPageHandler = () => {
    if (this.isAtEnd()) {
      return;
    }
    this.currentPage++;
    this.props.changePageHandler(this.currentPage);
  };
  render() {
    return (
      <div>
        <button onClick={this.prevPageHandler} disabled={this.isAtFirst()}>
          Prev
        </button>
        {this.pageNumberElement}
        <button onClick={this.nextPageHandler} disabled={this.isAtEnd()}>
          Next
        </button>
      </div>
    );
  }
}
