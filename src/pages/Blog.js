import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Animation from '../utils/Animation';

const Blog = () => {
    return (
        <>
            <Animation />
            <div className="section-inner-category">
                <ul className="inner-category">
                    <NavLink to="category/jewellery">Jewellery</NavLink>
                    <NavLink to="category/fashion">Fashion</NavLink>
                    <NavLink to="category/tech">Tech</NavLink>
                    <NavLink to="category/sports">Sports</NavLink>
                </ul>
            </div>
            <div className="section-blog blogMenu">
                <Outlet />
            </div>
        </>
    )
}

export default Blog