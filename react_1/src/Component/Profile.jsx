import React from 'react'

const Profile = (props) => {
  return (
   
      <div className="childcard">
        <img src={props.img} alt='' />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Profile
