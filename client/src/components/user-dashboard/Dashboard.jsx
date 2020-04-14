import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../../redux/actions/auth.actions'

const Dashboard = ({loadUser, auth: { isAuthenticated, authLoading, user }}) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <div>
      {console.log(user)}

  {user.role === 'user' && (<><h1>Welcome {user.firstName}</h1></>)}
  {user.role === 'publisher' && 
    (
      <>
        <h1>Welcome {user.firstName}</h1>
        <h2>Let's setup a Freelancer profile</h2>
        <button>Create Profile</button>
      </>
    )}
    {user.role === 'admin' && (
      <>
        <h1>Welcome {user.firstName}</h1>
        <h3>Your are an Admin</h3>
      </>
    )}

    </div>
  )
}

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.auth.user,
  auth: state.auth
})

export default connect(mapStateToProps, { loadUser })(Dashboard)
