import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Redux
import { getFreelancerById } from '../../../redux/actions/freelancers.actions'
import { connect } from 'react-redux'

const Freelancer = ({ match, getFreelancerById, freelancer: { 
  user,
  name,
  bio, 
 } }) => {

  // console.log(match.param.id)
  useEffect(() => {
    getFreelancerById(match.params.id);
  }, [getFreelancerById, match.params.id])
  console.log(name)
  return (
    <>
      <p>Here is the freelancer your requested:</p>
        <h2>Name: {name}</h2>
        <h2>Bio: {bio}</h2>
        <button className='btn'><Link to='/freelancers'>Back</Link></button>
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
