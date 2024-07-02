import React from 'react'

const Categories = () => {
    const editPost = (id) => {
        alert(id);
    };
    const deletePost = (id) => {
        alert(id);
    };
    const postData = (e) => {
        e.preventDefault();
        alert("data posted");
    }
    return (
        <div className="categories">
            <h3>All Categories</h3>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Germany</td>
                    <td>
                        <span onClick={() => editPost(1)} className="edit">Edit</span>/<span onClick={() => deletePost(1)} className="delete">Delete</span>
                    </td>
                </tr>
            </table>
            <h3>Add Categories</h3>
            <form onSubmit={postData}>
                <div className="input-container">
                    <label htmlFor="fname">Title</label>
                    <input type="text" id="fname" name="fname" value="John" />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Categories