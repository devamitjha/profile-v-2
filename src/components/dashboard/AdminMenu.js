import React, { useState } from 'react';
import './dashboard.scss';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menu) => {
        if (activeMenu === menu) {
            setActiveMenu(null);
        } else {
            setActiveMenu(menu);
        }
    };

    return (
        <div className="admin-nav">
            <ul>
                <li className={activeMenu === 'post' ? 'active' : ''}>
                    <div className="mainMenu" onClick={() => handleMenuClick('post')}>Post</div>
                    {activeMenu === 'post' && (
                        <div className="subMenu">
                            <Link to="/admin/allposts">All Posts</Link>
                            <Link to="/admin/addpost">Add New</Link>
                            <Link to="/admin/categories">Categories</Link>
                            <Link to="/admin/tags">Tags</Link>
                        </div>
                    )}
                </li>
                <li className={activeMenu === 'media' ? 'active' : ''}>
                    <div className="mainMenu" onClick={() => handleMenuClick('media')}>Media</div>
                    {activeMenu === 'media' && (
                        <div className="subMenu">
                            <Link to="/admin/library">library</Link>
                            <Link to="/admin/addmedia">Add New</Link>
                        </div>
                    )}
                </li>
                <li className={activeMenu === 'comments' ? 'active' : ''}>
                    <div className="mainMenu" onClick={() => handleMenuClick('comments')}>
                        <Link to="/admin/comments">Comments</Link>
                    </div>
                </li>
                <li className={activeMenu === 'users' ? 'active' : ''}>
                    <div className="mainMenu" onClick={() => handleMenuClick('users')}>Users</div>
                    {activeMenu === 'users' && (
                        <div className="subMenu">
                            <Link to="/admin/alluser">All User</Link>
                            <Link to="/admin/adduser">Add New</Link>
                            <Link to="/admin/profile">Your Profile</Link>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default AdminMenu;
