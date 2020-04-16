import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Freelancer = ({ freelancer: { 
  _id,
  user,
  name,
  bio, 
 } }) => {
  return (
    <div className='my-1'>
        <h2 className='heading_main'>{name}</h2>
        <p>{bio}</p>
        <Link to={`/freelancers/${_id}`} className='btn' style={{marginTop: '1rem'}}>View Profile</Link>
      </div>

  )
}

Freelancer.propTypes = {
  freelancer: PropTypes.object.isRequired,
}

export default Freelancer
