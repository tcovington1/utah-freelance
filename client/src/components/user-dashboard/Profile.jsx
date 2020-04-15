import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const Profile = ({profile, user}) => {
  console.log(profile)

const fullName = user.firstName + ' ' + user.lastName

  return (
    <div>
      <h1>Freelancer Profile for {fullName}</h1>
      <h1>{profile.name}</h1>
      <div className="cntr">
        <Link to='/editfreelancer' className="btn">Edit Freelancer Profile</Link>
        <Link to='/addphoto' className="btn">Add a Photo</Link>
      </div>
    </div>
  )
}

// Profile.propTypes = {

// }

export default Profile
