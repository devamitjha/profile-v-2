import React from 'react';
import "./dashboard.scss";

const AdminMenu = () => {
    return (
        <div className="admin-nav">
            <ul>
                <li className="active">
                    <div className="active">Post</div>
                    <ul>
                        <li>All Posts</li>
                        <li>Add New</li>
                        <li>Categories</li>
                        <li>Tags</li>
                    </ul>
                </li>
                <li>
                    <div>Media</div>
                    <ul>
                        <li>Library</li>
                        <li>Add New</li>
                    </ul>
                </li>
                <li>
                    <div>Comments</div>
                    <ul>
                        <li>All</li>
                        <li>Mine</li>
                        <li>Pending</li>
                        <li>Approved</li>
                    </ul>

                </li>
                <li>
                    <div>Users</div>
                    <ul>
                        <li>All User</li>
                        <li>Add New</li>
                        <li>Your Profile</li>
                    </ul>

                </li>
            </ul>
        </div>
    )
}

export default AdminMenu