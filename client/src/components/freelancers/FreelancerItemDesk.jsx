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
    <>
    <div className="card_flex">
    <div className="card_img">
      {photo === 'no-photo.png' ? <img src={NoPhoto} alt="" className='round-img' />
      :
        <img src={'http://localhost:5000/api/v1/freelancers/1/photo'} alt="" className='round-img' />
      }
    </div>
    <div className="card_body">
      <h3 className='heading_main heading__primary'>{name}</h3>
      <div className="badge">
        <p>{address}</p>
      </div>
      <p className='heading_sub'>{title}</p>
      <div className="card_rating">
      {averageRating}
      </div>
    </div>
  </div> 
  </>
  )}

export default Freelancer
