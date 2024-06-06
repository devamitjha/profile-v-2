import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const MenuItem = () => {
    const user = true;
    const navigate = useNavigate();

    const handleClick = (e) => {
        if (!user) {
            e.preventDefault();
            navigate('/login');
        }
    };

    return (
        <div className="menu">
            <NavLink className="item" to="/">
                <span className="icon">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                </span>
                <p>About</p>
            </NavLink>
            <NavLink className="item" to="/resume" onClick={handleClick}>
                <span className="icon">
                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                </span>
                <p>Resume</p>
            </NavLink>
            <NavLink className="item" to="/portfolio" onClick={handleClick}>
                <span className="icon">
                    <i className="fa fa-file-code-o" aria-hidden="true"></i>
                </span>
                <p>Work</p>
            </NavLink>
            <NavLink className="item" to="/blog/category">
                <span className="icon">
                    <i className="fa fa-rss" aria-hidden="true"></i>
                </span>
                <p>Blog</p>
            </NavLink>
            <NavLink className="item" to="/shop/category">
                <span className="icon">
                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                </span>
                <p>Shop</p>
            </NavLink>
            <NavLink className="item" to="contact">
                <span className="icon">
                    <i className="fa fa-address-book-o" aria-hidden="true"></i>
                </span>
                <p>Contact</p>
            </NavLink>
        </div>
    );
};

export default MenuItem;
