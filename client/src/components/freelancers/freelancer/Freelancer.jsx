import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Redux
import { getFreelancerById } from '../../../redux/actions/freelancers.actions'
import { connect } from 'react-redux'
import ProfileImg from '../../../assets/Taylor_Covington_mob.jpeg'

const Freelancer = ({ match, getFreelancerById, freelancer: { 
  user,
  name,
  bio,
  phone,
  email 
 } }) => {

  useEffect(() => {
    getFreelancerById(match.params.id);
  }, [getFreelancerById, match.params.id])

  return (
    <>
    <div className="cntr profile_main">
    <img src={ProfileImg} alt="" className='round-img'/>

    <h1 className="heading">{name}</h1>
      <p>{bio}</p>
      <p>{phone}</p>
      <p>{email}</p>

    </div>
    <div className="cntr">
      <button className='btn my-half'><Link to='/freelancers' className='link_color-primary' >Back</Link></button>
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
