import React, { Component } from 'react';

import './Course.css';

export default class Course extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='row'>
        <div>Course Id: {this.props.courseId}</div>
        <div>Course Name{this.props.courseName}</div>
        <div>Course Duration:{this.props.duartion}</div>
      </div>
    );
  }
}
