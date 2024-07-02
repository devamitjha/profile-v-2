import React from 'react'

const AddUser = () => {
  const postData = (e) => {
    e.preventDefault();
    alert("data posted");
  }
  return (
    <div className="addUser">
      <h2>Add User</h2>
      <form onSubmit={postData}>
        <div className="input-container">
          <label htmlFor="fname">Title</label>
          <input type="text" id="fname" name="fname" value="John" />
        </div>
        <div className="input-container">
          <label htmlFor="lname">Post Short Description</label>
          <textarea name="short-description">Enter text here...</textarea>
        </div>
        <div className="input-container">
          <label htmlFor="lname">Post Description</label>
          <textarea name="description">Enter text here...</textarea>
        </div>
        <div className="input-container">
          <label htmlFor="lname">Post Image</label>
          <input type="file" />
        </div>

        <div className="input-container">
          <label htmlFor="lname">Post Category</label>
          <input type="text" name="lname" value="Doe" />
        </div>
        <div className="input-container">
          <label htmlFor="lname">Tags</label>
          <input type="text" name="lname" value="Doe" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddUser