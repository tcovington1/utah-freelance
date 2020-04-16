import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getFreelancerList } from '../../redux/actions/freelancers.actions'
import FreelancerItem from './FreelancerItem'

// freelancer: {freelancers, loading}
const Freelancers = ({ getFreelancerList, freelancerList }) => {
  useEffect(() => {
    getFreelancerList();
  }, []);
  return (
    <>
    <div className="cntr">
      { freelancerList.length > 0 ? (
        freelancerList.map( freelancer => (
        <FreelancerItem key={freelancer._id} freelancer={freelancer} />
      ))
      ) : <h4>No profiles were found...</h4> }
    </div>
    </>
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
