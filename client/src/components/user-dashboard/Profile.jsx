import React from 'react'
// import PropTypes from 'prop-types'

const Profile = ({profile}) => {
  console.log(profile)
  return (
    <div>
      <h1>Freelancer Profile</h1>
      <h1>{profile.name}</h1>
    </div>
  )
}

// Profile.propTypes = {

// }

export default Profile
