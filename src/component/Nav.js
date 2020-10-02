import React from 'react'
import {NavLink, Link} from 'react-router-dom'
export default function Nav() {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link className="navbar-brand left" to="/">LOGO</Link>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/posts">Posts</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/comments">Comments</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
