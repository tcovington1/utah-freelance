import React from 'react'
import { Link } from 'react-router-dom'

const SetupProfile = ({name}) => {
  return (
    <>
      <div className="cntr-middle">
        <div className='cntr-middle_box'>
          <div className="my-1">
            <h1 className='heading_welcome'>Welcome {name}</h1>
            <p className='heading_sub'>Let's setup your Freelancer profile</p>
          </div>
        <Link to='/createfreelancer' className='btn btn-primary btn-med my-1'>Create Profile</Link>
        <Link to='/createfreelancer' className='btn btn-primary_inverted btn-med my-1'>Skip For Now</Link>
        </div>
    </div>
 
    </>
  )
}

export default SetupProfile
