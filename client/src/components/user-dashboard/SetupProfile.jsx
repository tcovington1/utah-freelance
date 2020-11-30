import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'

const SetupProfile = ({name}) => {
  return (
    <>
    {/* <Navbar /> */}
      <div className="cntr-middle">
          <div className='cntr-middle_box'>
            <div className="my-1">
              <h1 className='heading_welcome m-1'>Welcome {name}</h1>
              <p className='heading_sub m-1'>Let's setup your Freelancer profile</p>
            </div>
          <Link to='/createfreelancer' className='btn btn-primary btn-med m-1'>Create Profile</Link>
          <Link to='/createfreelancer' className='btn btn-primary_inverted btn-med m-1'>Skip For Now</Link>
          </div>
    </div>
 
    </>
  )
}

export default SetupProfile
