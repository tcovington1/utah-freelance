import React from 'react'
import { Link } from 'react-router-dom'
import './layout.scss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../redux/actions/auth.actions'

// npm install --save-dev @iconify/react @iconify/icons-mdi
import { Icon, InlineIcon } from '@iconify/react';
import accountIcon from '@iconify/icons-mdi/account';


const Navbar = ({logout, auth: {isAuthenticated, loading}}) => {
  const authLinks = (
    <ul>
        <li>
          <Link onClick={logout}>Logout</Link>             
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
    <nav className='navbar'>
      <h1 className='logo'>
        <Link to='/'>Utah Freelance</Link>
      </h1>
      {!loading && isAuthenticated ? authLinks : guestLinks}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)