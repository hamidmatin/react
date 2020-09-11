import React, { useState, useEffect } from "react";
import axios from "axios";
import "./User.scss";

export default function User(props) {
  const [styleTitle, setStyleTitle] = useState({
    color: "red",
    backgroundColor: "pink",
    textAlign: "center"
  });

  const titleClick = () => {
    setStyleTitle({
      color: "blue",
      backgroundColor: "pink",
      textAlign: "center"
    });
  };

  const showPostHandler = id => {
    console.log(id);
    axios
      .patch()
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => {
        console.log(response.data);
      });
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
    </div>
  );
}

// import React, { Component } from "react";
// import axios from "axios";
// import "./User.scss";

// export default class User extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       styleTitle: {
//         color: "red",
//         backgroundColor: "pink",
//         textAlign: "center",
//       },
//     };
//   }
//   titleClick = () => {
//     this.setState({
//       styleTitle: {
//         color: "blue",
//         backgroundColor: "pink",
//         textAlign: "center",
//       },
//     });

//   };

//   showPostHandler = (id) => {
//     console.log(id);
//     axios
//       .patch()
//       .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//       .then((response) => {
//         console.log(response.data);
//       });
//   };
//   render() {
//     return (
//       <div className="user">
//         <h2 style={this.state.styleTitle} onClick={this.titleClick}>
//           {this.props.name}
//         </h2>
//         <h4>{this.props.username}</h4>
//         <p>{this.props.email}</p>
//         <p>{this.props.phone}</p>
//         <button
//           onClick={() => {
//             this.showPostHandler(this.props.id);
//           }}
//         >
//           Show Post
//         </button>
//       </div>
//     );
//   }
// }
