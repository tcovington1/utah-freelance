import React from 'react'
import PropTypes from 'prop-types'
import fillPhoto from '../../assets/Taylor_Covington_mob.jpeg'
import { Link } from 'react-router-dom'

// Icons
import { Icon, InlineIcon } from '@iconify/react';
import starIcon from '@iconify/icons-mdi/star';


const Freelancer = ({ freelancer: { 
  _id,
  user,
  name,
  bio, 
  phone,
  photo,
  title
 } }) => {
  return (
    <div className='card card_freelancer my-1'>
      <div className="card_top">
        <img src={fillPhoto} alt="freelancer photo" style={{objectFit: 'cover', borderRadius: '25px'}}/>
      </div>
      <div className="card_body">
        <h2 className='heading_main heading__primary'>{name}</h2>
        {title.map(res => 
          <h3>{res}</h3>
          )}
        <p>{bio}</p>
        <p>{phone}</p>
        <div className="profile-rating">
          <InlineIcon icon={starIcon} color="#F49D1E" width='4rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='4rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='4rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='4rem'/>
          </div>
      </div>
        <Link to={`/freelancers/${_id}`} className='btn btn-primary btn-med' style={{marginTop: '1rem'}}>View Profile</Link>
      </div>

  )
}

Freelancer.propTypes = {
  freelancer: PropTypes.object.isRequired,
}

export default Freelancer
