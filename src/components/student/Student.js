import React, { Component } from 'react';

import Course from '../course/Course';

import './Student.css';

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCours: false,
    };
  }

  toggleerCourseHandler = () => {
      const newState = {...this.state};
      newState.toggleCours = !newState.toggleCours;

      this.setState(newState);
  };

  render() {
    return (
      <div>
        <h2>
          {this.props.firstName} {this.props.lastName}
        </h2>
        <p>Tel : {this.props.tel}</p>
        <p>E-mail: {this.props.email}</p>
        <button onClick={this.props.click}>Change Last name</button>
        <button onClick={this.props.delete}>Delete</button>
        <button onClick={this.toggleerCourseHandler}>Toggle Course</button>
        <hr />
        {this.state.toggleCours
          ? this.props.courses.map((course) => {
              return (
                <Course
                  key={course.courseId}
                  courseId={course.courseId}
                  courseName={course.courseName}
                  duartion={course.courseDuration}
                />
              );
            })
          : null}
      </div>
    );
  }
}
// export default Student;
