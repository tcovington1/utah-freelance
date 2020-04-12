import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Freelancer = ({ freelancer: { 
  user,
  name,
  bio, 
 } }) => {
  return (
    <div>
        <h2>{name}</h2>
        <h2>{bio}</h2>
      </div>

  )
}

Freelancer.propTypes = {
  freelancer: PropTypes.object.isRequired,
}

export default Freelancer
