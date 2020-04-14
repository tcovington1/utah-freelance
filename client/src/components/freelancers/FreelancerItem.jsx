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
    <div>
        <h2>{name}</h2>
        <h2>{bio}</h2>
        <Link to={`/freelancers/${_id}`} className='btn'>View Profile</Link>
      </div>

  )
}

Freelancer.propTypes = {
  freelancer: PropTypes.object.isRequired,
}

export default Freelancer
