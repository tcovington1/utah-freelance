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


const Freelancer = ({ match, getFreelancerById, freelancer: { 
  user,
  name,
  bio,
  phone,
  email,
  website,
  photo 
 } }) => {

  useEffect(() => {
    getFreelancerById(match.params.id);
  }, [getFreelancerById, match.params.id])

  return (
    <>
    <div className="cntr profile_main">
      <div className="profile_heading">
        <div className="profile_box-pic">
          {photo === 'no-photo.png' ? <img src={NoPhoto} alt="" className='round-img' style={{position: 'absolute', left: '10px', top: '12px'}}/>
            :
            <img src={photo} alt="" className='round-img' style={{position: 'absolute', left: '10px', top: '12px'}}/>
          }
        </div>
      <div className="profile_box-data">
        <h1 className="heading-main">{name}</h1>
          <p>{phone}</p>
          <p>{email}</p>
          <div className="profile-rating">
          <InlineIcon icon={starIcon} color="#F49D1E" width='2.5rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='2.5rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='2.5rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='2.5rem'/>
          </div>
      </div>
      </div>
      <div className="profile_body">
        <div className="profile_body-content">
          <h3>{bio}</h3>
          <h3>{website}</h3>

        </div>
      </div>

    </div>
    <div className="cntr">
      <Link to='/freelancers' className=' btn btn-primary_inverted btn-med my-half' >Back</Link>
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
