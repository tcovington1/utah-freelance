import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { loadUser } from '../../redux/actions/auth.actions'
import { getCurrentProfile } from '../../redux/actions/freelancers.actions'
import { Link, withRouter } from 'react-router-dom'
import Profile from './Profile';

// loadUser
const Dashboard = ({ getCurrentProfile, auth: { isAuthenticated, authLoading, user }, profile}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const { firstName, role } = user
  console.log(profile)
  return (
    <>
     {profile === null && role === 'publisher' ? (
        <>
        <h1>Welcome {firstName}</h1>
        <h2>Let's setup a Freelancer profile</h2>
        <button><Link to='/createfreelancer'>Create Profile</Link></button>
       </>
     ) 
     :
      <Profile profile={profile}/>
     }
      {role === 'admin' && (
        <>
          <h1>Welcome {firstName}</h1>
          <h3>Your are an Admin</h3>
        </>
      )}

    </>
  )
}

Dashboard.propTypes = {
  // loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.auth.user,
  auth: state.auth,
  profile: state?.freelancer?.profile || []
})

// loadUser
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
