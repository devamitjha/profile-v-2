import React from 'react'

const AddUser = () => {
  const postData = (e) => {
    e.preventDefault();
    alert("data posted");
  }
  return (
    <div className="addUser">
      <div className="section-addUser">
        <h2>Add User</h2>
        <form onSubmit={postData}>
          <div className="input-container">
            <div class="box">
              <input type="file" name="file-1[]" id="file-1" class="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />
              <label for="file-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" /></svg> <span>Choose a file&hellip;</span></label>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="fname">Name</label>
            <input type="text" id="fname" name="fname" value="John" />
          </div>
          <div className="input-container">
            <label htmlFor="fname">Email</label>
            <input type="text" id="fname" name="fname" value="John" />
          </div>
          <div className="input-container">
            <label htmlFor="fname">Phone</label>
            <input type="text" id="fname" name="fname" value="John" />
          </div>
          <div className="input-container">
            <label htmlFor="lname">Address</label>
            <textarea name="description">Enter text here...</textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="section-preview">
        <h2>Preview</h2>
        <div className="prev-img">
          <img src={process.env.PUBLIC_URL + '/images/blog/5.jpg'} alt="preview-image" />
        </div>
        <div className="prev-title">Complete Guide to User Flow in UX Design</div>
        <div className="prev-desc">
          <p>QProin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. As technology continues to advance at a rapid pace, the way we work and interact with our devices is also changing. One area that has seen significant growth in recent years is the intersection of user experience (UX) and user interface (UI) design, artificial intelligence (AI), and the modern work station.</p>

          <p>In this blog post, we will explore how these three elements are coming together to revolutionize the workplace.Nulla aliquam rerum nesciunt velit iusto. Deserunt fugiat tempora sed voluptatibus neque suscipit minima qui. Beatae ipsa autem adipisci. Iusto numquam maxime vitae natus molestiae.</p>
        </div>
      </div>
    </div>
  )
}

export default AddUser