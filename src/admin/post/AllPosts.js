import React from 'react';
import "./posts.scss";

const AppPosts = () => {

    const editPost = (id) => {
        alert(id);
    };

    const deletePost = (id) => {
        alert(id);
    };

    return (
        <div className="allPosts">
            <h3>All Posts</h3>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Categories</th>
                    <th>Tags</th>
                    <th>Comments</th>
                    <th>Like</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>
                        <span onClick={() => editPost(1)} className="edit">Edit</span>/<span onClick={() => deletePost(1)} className="delete">Delete</span>
                    </td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Edit/Delete</td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Edit/Delete</td>
                </tr>
            </table>
        </div>
    )
}

export default AppPosts