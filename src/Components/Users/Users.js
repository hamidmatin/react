import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User/User.js";
import Loading from "../Loading/Loading";

import "./Users.css";

export default function Users(props) {
  const base_url = "https://jsonplaceholder.typicode.com/";
  const [userList, setUserList] = useState(null);

  // const laodUser = () => {
  //   setTimeout(() => {
  //     axios
  //       .get(base_url + "users")
  //       .then(response => {
  //         setUserList(response.data);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, 1000);
  // };
  useEffect( () => {
    setTimeout(() => {
      axios
        .get(base_url + "users")
        .then(response => {
          setUserList(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, 1000);
  });

  return (
    <div className="Container">
      {userList !== null ? (
        userList.map(user => {
          return (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
            />
          );
        })
      ) : (
        <Loading />
        // <button onClick={laodUser}>Load</button>
      )}
    </div>
  );
}
