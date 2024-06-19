import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

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
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className="mition-scale">
                <NavLink className="item" to="/" >
                    <span className="icon">
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                    </span>
                    <p>About</p>
                </NavLink>
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className="mition-scale">
                <NavLink className="item" to="/resume" onClick={handleClick}>
                    <span className="icon">
                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                    </span>
                    <p>Resume</p>
                </NavLink>
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className="mition-scale">
                <NavLink className="item" to="/portfolio" onClick={handleClick}>
                    <span className="icon">
                        <i className="fa fa-file-code-o" aria-hidden="true"></i>
                    </span>
                    <p>Work</p>
                </NavLink>
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className="mition-scale">
                <NavLink className="item" to="/blog/category">
                    <span className="icon">
                        <i className="fa fa-rss" aria-hidden="true"></i>
                    </span>
                    <p>Blog</p>
                </NavLink>
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className="mition-scale">
                <NavLink className="item" to="/shop/category">
                    <span className="icon">
                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                    </span>
                    <p>Shop</p>
                </NavLink>
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className="mition-scale">
                <NavLink className="item" to="contact">
                    <span className="icon">
                        <i className="fa fa-address-book-o" aria-hidden="true"></i>
                    </span>
                    <p>Contact</p>
                </NavLink>
            </motion.div>
        </div>
    );
};

export default MenuItem;
