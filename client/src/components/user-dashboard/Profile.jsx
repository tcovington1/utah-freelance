import React from 'react'
import { Link } from 'react-router-dom'
import ProfileImg from '../../assets/Taylor_Covington_mob.jpeg'
// import PropTypes from 'prop-types'

const Profile = ({profile, user}) => {
  console.log(profile)

const fullName = user.firstName + ' ' + user.lastName

const {name, bio, website, phone, email, address} = profile;

  return (
    <>
    <div className="cntr profile_main">
      <img src={ProfileImg} alt="" className='round-img'/>
      <h1 className='heading'>Hi {user.firstName},</h1>

      <h2>{name}</h2>
      <p>{bio}</p>
      <p>{website}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
      <div className="cntr">
        <Link to={`/editfreelancer/${profile.id}`} className="btn btn-med my-half">Edit Freelancer Profile</Link>
        <Link to='/addphoto' className="btn btn-med my-half">Add a Photo</Link>
        <Link to='/addphoto' className="btn btn-med my-half">Add Services</Link>
      </div>
      <hr/>
      <div className="cntr profile_reviews">
        <p className="heading_sub">Here's what people are saying:</p>
        <p>Carousel of reviews will go here...</p>
      </div>
    </>
  )
}

// Profile.propTypes = {

// }

export default Profile
