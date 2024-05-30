import React from 'react';
import { NavLink } from 'react-router-dom';

const Memu = () => {
    return (
        <div className="menu">
            <NavLink className="item" to="/">
                <span className="icon">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                </span>
                <p>About</p>
            </NavLink>
            <NavLink className="item" to="resume">
                <span className="icon">
                    <i class="fa fa-file-text-o" aria-hidden="true"></i>
                </span>
                <p>Resume</p>
            </NavLink>
            <NavLink className="item" to="portfolio">
                <span className="icon">
                    <i class="fa fa-file-code-o" aria-hidden="true"></i>
                </span>
                <p>Work</p>
            </NavLink>
            <NavLink className="item" to="blog">
                <span className="icon">
                    <i class="fa fa-rss" aria-hidden="true"></i>
                </span>
                <p>Blog</p>
            </NavLink>
            <NavLink className="item" to="contact">
                <span className="icon">
                    <i class="fa fa-address-book-o" aria-hidden="true"></i>
                </span>
                <p>Contact</p>
            </NavLink>
        </div>
    )
}

export default Memu