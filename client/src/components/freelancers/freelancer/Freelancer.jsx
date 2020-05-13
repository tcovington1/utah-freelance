import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import NoPhoto from '../../../assets/Taylor_Covington_mob.jpeg'

// Redux
import { getFreelancerById } from '../../../redux/actions/freelancers.actions'
import { connect } from 'react-redux'

// Icons
import { Icon, InlineIcon } from '@iconify/react';
import starIcon from '@iconify/icons-mdi/star';
import Navbar from '../../layout/Navbar'


const Freelancer = ({ match, getFreelancerById, freelancer: { 
  user,
  name,
  bio,
  phone,
  email,
  website,
  photo,
  address,
  averageRating
 } }) => {

  useEffect(() => {
    getFreelancerById(match.params.id);
  }, [getFreelancerById, match.params.id])

  return (
    <>
    <div style={{margin: '7rem 7rem', maxWidth: '1140px'}}>

    <div className="flex">
      <div className="main">
      <h1 className='heading_main'>{name}</h1>
      <p>{bio}</p>
      <div>
        <h3>Services</h3>
      </div>
      </div>
      <div className="side">
        <div className="flex-col ">
          <img src={'http://localhost:5000/api/v1/freelancers/1/photo'} alt="" className='round-img'/>
          <div>{averageRating}</div>
          
          <Link className='btn btn-primary btn-sm'>Read Reviews</Link>
          <Link className='btn btn-primary_inverted btn-sm'>Write a Review</Link>
          <a href={website} className='btn btn-gray btn-sm'>Visit Website</a>
        </div>
      </div>
    </div>
    <div className="cntr">
      <Link to='/freelancers' className=' btn btn-primary_inverted btn-med my-half' >Back</Link>
    </div>
      </div>
    </>
  )
}

Freelancer.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  freelancer: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  freelancer: state?.freelancer?.freelancer || [],
  // auth: state.auth
})


export default connect(mapStateToProps, { getFreelancerById })(Freelancer)
