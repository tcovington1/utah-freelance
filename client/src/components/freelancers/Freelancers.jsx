import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getFreelancerList } from '../../redux/actions/freelancers.actions'
import Freelancer from './Freelancer'

// freelancer: {freelancers, loading}
const Freelancers = ({ getFreelancerList, freelancerList }) => {
  useEffect(() => {
    getFreelancerList();
  }, []);
  return (
    <div>
    {console.log(freelancerList)}
    
     {/* {freelancers.map( freelancer => 
            <h1 style={{marginTop: '10rem'}}>{freelancer.name}</h1>)} */}
      { freelancerList.length > 0 ? (
        freelancerList.map( freelancer => (
          <Freelancer key={freelancer._id} freelancer={freelancer} />
          ))
          ) : <h4>No profiles were found...</h4> }
    </div>
  )
}

Freelancers.propTypes = {
  getFreelancerList: PropTypes.func.isRequired,
  freelancerList: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  freelancerList: state?.freelancer?.freelancerList || []
})

export default connect(mapStateToProps, { getFreelancerList })(Freelancers)
