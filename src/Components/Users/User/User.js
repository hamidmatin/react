import React, { Component } from 'react'

export default class User extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h4>{this.props.username}</h4>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
            </div>
        )
    }
}
