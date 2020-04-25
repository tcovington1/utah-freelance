import React from 'react'
import { Link } from 'react-router-dom'
import './layout.scss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../redux/actions/auth.actions'

// npm install --save-dev @iconify/react @iconify/icons-mdi
import { Icon, InlineIcon } from '@iconify/react';
import accountIcon from '@iconify/icons-mdi/account';
import logoutIcon from '@iconify/icons-mdi/logout';


// auth: {isAuthenticated, loading
const LoggedInNav = ({logout}) => {
  const authLinks = (
    <ul>
        <li>
          <Link to='/freelancers'>Browse</Link>  
        </li>
        <li>
          <Link to='/dashboard'>
            <Icon style={{marginRight: '.5em'}} width="3.5rem" icon={accountIcon} className='lg-hide' />
            <span className='mob-hide'>Profile</span>
          </Link>             
        </li>
        <li>
          <Link onClick={logout}>
            <Icon icon={logoutIcon} width="3.5rem"  className='lg-hide'/>           
            <span className='mob-hide'>Logout</span>
          </Link>             
        </li>

      </ul>
  )
  const guestLinks = (
    <ul>
        <li>
          <Link to='/freelancers'>Home</Link>             
        </li>
        <li>
          <Link to='/login'>Login</Link>              
        </li>
        <li>
          <Link to='/register'>Register</Link>             
        </li>
      </ul>
  )

  return(
    <nav className='side-navbar'>
      <h3 className='logo'>
        <Link to='/'>Utah Freelance</Link>
      </h3>
      {!loading && isAuthenticated ? authLinks : guestLinks}
    </nav>
  )
}

LoggedInNav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(LoggedInNav)