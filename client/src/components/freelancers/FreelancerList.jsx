import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getFreelancerList } from '../../redux/actions/freelancers.actions'
import FreelancerItem from './FreelancerItem'
import Navbar from '../layout/Navbar'
import ProfileCard from '../user-dashboard/ProfileCard'
import FreelancerSearchBox from './FreelancerSearchBox'

// freelancer: {freelancers, loading}
const Freelancers = ({ getFreelancerList, freelancerList }) => {
  useEffect(() => {
    getFreelancerList();
  }, []);
  return (
    <>
    <div style={{margin: '7rem 4rem'}}>
      <div style={{display: 'flex'}}>
        <div>
          <FreelancerSearchBox />
        </div>
        <div style={{marginLeft: '3rem'}}>

          { freelancerList.length > 0 ? (
           freelancerList.map( freelancer => (
            // <FreelancerItem key={freelancer._id} freelancer={freelancer} />
            <div style={{margin: '2rem', padding: '2rem', border: '1px solid black'}}>

              <ProfileCard key={freelancer._id} freelancer={freelancer} />
            </div>
          ))
          ) : <h4>No profiles were found...</h4> }
        </div>
      </div>
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
