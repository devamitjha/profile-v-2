import React from 'react';
import "./comment.scss";

const Comments = () => {
    const editPost = (id) => {
        alert(id);
    };

    const deletePost = (id) => {
        alert(id);
    };
    return (
        <div className="section-comment">
            <h2>Comments</h2>
            <div className="comment-action">
                <span>All</span>
                <span>Mine</span>
                <span>Pending</span>
                <span>Approved</span>
            </div>
            <div className="container-comment">
                <table>
                    <tr>
                        <th>
                            <input type="checkbox" className="checkbox" />
                        </th>
                        <th>Author</th>
                        <th>Comment</th>
                        <th>Post</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <th>
                            <input type="checkbox" className="checkbox" />
                        </th>
                        <td>Author</td>
                        <td className="comment-title">
                            <p>Comment</p>
                            <div className="post-action">Unapproved | Reply | Edit | Delete</div>
                        </td>
                        <td>Post</td>
                        <td>date</td>
                    </tr>
                    <tr>
                        <th>
                            <input type="checkbox" className="checkbox" />
                        </th>
                        <td>Author</td>
                        <td className="comment-title">
                            <p>Comment</p>
                            <div className="post-action">Unapproved | Reply | Edit | Delete</div>
                        </td>
                        <td>Post</td>
                        <td>date</td>
                    </tr>
                    <tr>
                        <th>
                            <input type="checkbox" className="checkbox" />
                        </th>
                        <td>Author</td>
                        <td className="comment-title">
                            <p>Comment</p>
                            <div className="post-action">Unapproved | Reply | Edit | Delete</div>
                        </td>
                        <td>Post</td>
                        <td>date</td>
                    </tr>
                    <tr>
                        <th>
                            <input type="checkbox" className="checkbox" />
                        </th>
                        <td>Author</td>
                        <td className="comment-title">
                            <p>Comment</p>
                            <div className="post-action">Unapproved | Reply | Edit | Delete</div>
                        </td>
                        <td>Post</td>
                        <td>date</td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Comments