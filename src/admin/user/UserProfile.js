import React from 'react'

const UserProfile = () => {
  return (
    <div className="userProfile">
      <div className="profileCard">
        <div className="avatar">Image</div>
        <div className="user-bio">
          Name
          Email
          Phone
        </div>
        <div className="other-info">
          Address
        </div>
      </div>
    </div>
  )
}

export default UserProfile