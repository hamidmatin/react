import React, { Component } from 'react';
import Student from './components/student/Student';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [
        {
          id: '1',
          firstName: 'Shayan',
          lastName: 'Doroodian',
          tel: '5646545',
          email: 'sdsj@skdhs.xc',
        },
        {
          id: '2',
          firstName: 'Masoud',
          lastName: 'Shapouri',
          tel: '5646545',
          email: 'sdsj@skdhs.xc',
        },
        {
          id: '3',
          firstName: 'Sadegh',
          lastName: 'Hashemi',
          tel: '5646545',
          email: 'sdsj@skdhs.xc',
        },
        {
          id: '4',
          firstName: 'Rasoul',
          lastName: 'Mohammadi',
          tel: '5646545',
          email: 'sdsj@skdhs.xc',
        },
        {
          id: '5',
          firstName: 'Mohammad',
          lastName: 'Vahedi',
          tel: '4654654654',
          email: 'afdsds@sdsd.xc',
        },
      ],
    };
  }
  changeNameHandler = (e) => {
    console.log(e);

    // this.state.studentList[0].firstName = 'sdss';
    const newState = { ...this.state };
    newState.studentList[0].firstName = 'Hamid';
    this.setState(newState);
  };

  changeLastNameHandler = (id, lastName) => {
    const newState = { ...this.state };
    const index =  newState.studentList.findIndex((student)=> student.id === id);
    newState.studentList[index].lastName = lastName;
    this.setState(newState);
  };

  render() {
    return (
      <div className='center'>
        <h2 className='title'>Hello Students</h2>
        <button className='btn-change' onClick={this.changeNameHandler}>
          Change Name klhklhlkhl
        </button>

        {this.state.studentList.map((student) => {
          return (
            <Student
              key={student.id}
              firstName={student.firstName}
              lastName={student.lastName}
              tel={student.tel}
              email={student.email}
              click = {()=>this.changeLastNameHandler(student.id, 'Shohpouri')}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
