import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User/User.js";
import Loading from "../Loading/Loading";

import "./Users.css";

export default function Users(props) {
  const base_url = "https://jsonplaceholder.typicode.com/";
  const [userList, setUserList] = useState(null);
  const [userListLoaded, setUserListLoaded] = useState(false);

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
  useEffect(() => {
    if (!userListLoaded) {
      setTimeout(() => {
        axios
          .get(base_url + "users")
          .then((response) => {
            setUserList(response.data);
            setUserListLoaded(true);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1000);
    }
  });

  const doFilter = () => {
    console.log(userList);

    const newUserList = [...userList];
    const newList = newUserList.filter((item) => {
      console.log(item.username.indexOf("B") > 0);
      return item.username.indexOf("B") > -1;
    });
    console.log(newList);
    setUserList(newList);
  };

  const doClearFilter = ()=>{
    setUserListLoaded(false);
  }
  return (
    <div className="Container">
      <button onClick={doFilter}>Filter</button>
      <button onClick={doClearFilter}>Clear Filter</button>
      {userList !== null ? (
        userList.map((user) => {
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
