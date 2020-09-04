import React, { Component } from 'react';
import userList from '../../Assets/Data/users.json';
import User from './User/User.js';

export default class Users extends Component {
    constructor(props){
        super(props)
        this.state= {
            userList : userList
        }
    }
    
    render() {
        return (
            <div>
                {this.state.userList.map((user)=>{
                    return <User key={user.id} name={user.name} username={user.username} email={user.email} phone={user.phone}/>
                })}
            </div>
        )
    }
}
