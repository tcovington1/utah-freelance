import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { register } from '../../redux/actions/auth.actions'
import { setAlert } from '../../redux/actions/alerts.actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    password: '',
    password2: ''
  });

  const { firstName, lastName, email, role, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
    if(password !== password2) {
      setAlert('Passwords do not match', 'danger')
      console.log('passwords do not match')
    } else {
      register({ firstName, lastName, email, role, password });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        password: '',
        password2: ''
      });
      console.log('registered!')
    }
  }

  // Redirect once registered
  if(isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    
    <>
    <div className="form-container">
      <h1 className="large text-primary">Lets start, </h1>
      {/* <p className="lead"><Icon icon={accountIcon} />Create Your Account</p> */}
      <div className="test-login">
        <p>If you'd like to test the site, click <Link to='/login' className='link_color-primary'>here</Link></p>
        
      </div>
      
      <form className='form' onSubmit={onSubmit} >
        
        <div className="form-group" style={{display: 'flex'}}>
            <input 
              type="text" 
              placeholder='First Name'
              name='firstName'
              value={firstName}
              onChange={ e => onChange(e)}
              required
            />
            <input 
              style={{marginLeft: '10px'}}
              type="text" 
              placeholder='Last Name'
              name='lastName'
              value={lastName}
              onChange={ e => onChange(e)}
              required
            />

        </div>
        <div className="form-group"> 
          <input 
            type="email" 
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={ e => onChange(e)}
            required
            />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            placeholder='Password' 
            // minLength='6'
            name='password'
            value={password}
            onChange={ e => onChange(e)}
            required  
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            placeholder='Confirm Password' 
            // minLength='6'
            name='password2'
            value={password2}
            onChange={ e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
        <select name="role" value={role} onChange={e => onChange(e)}>
            <option value="0">* Select a Role</option>
            <option value="publisher">Publisher</option>
            <option value="user">User</option>  
          </select>
        </div>
          <button className='btn btn-multi_primary btn-lg'>Sign Up</button>
      </form>
        <p className="my-1">Already have an account? <Link to='/login' className='link_color-primary'>Sign In</Link></p>
    </div>
    </>
  )
}

Register.protoTypes = {
  alert: PropTypes.func.isRequired,
  regiser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, {setAlert, register})(Register)