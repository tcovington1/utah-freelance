import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth.actions'


//Styling
// import Fade from 'react-reveal/Fade';

import { Icon, InlineIcon } from '@iconify/react';
import accountIcon from '@iconify/icons-mdi/account';
import Navbar from '../layout/Navbar';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const { email, password } = formData;

  const onChange = e => 
    setFormData({ ...formData, [e.target.name]: e.target.value});


  const onSubmit = async e => {
    e.preventDefault();  
    login(email,password);
  }

  // //Redirect if logged in
  if(isAuthenticated) {
    return <Redirect to='/dashboard'/>;
  }

  return (
    <>
    <Navbar />
    <div className="container">

    <div className="form-container">
      <h1 className="large text-primary">Welcome back,</h1>
      <p className="lead"><Icon icon={accountIcon} />Sign Into Your Account</p>
      {/* <div className="test-login">
        <p>If you'd like to test the site, you can use:</p>
        <h4>Email: john@email.com</h4>
        <h4>Password: 123456</h4>
      </div> */}
      {/* <div className="form-container_login"> */}
      
      <form className='form' onSubmit={onSubmit} >
        <div className="form-group"> 
          <input 
            type="email" 
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={ e => onChange(e)}
            required
            />
            {/* <label className='form-group_label'>
              <span>Email Address</span>
            </label> */}
        
        </div>
        <div className="form-group">
    
          <input 
            type="password" 
            placeholder='Password' 
            minLength='6'
            name='password'
            value={password}
            onChange={ e => onChange(e)}
            required  
            />
       
        </div>
        <div className="cntr">
          <button className='btn btn-primary btn-med center'>Log In</button>
        </div>
      </form>
         <Link to='/forgotpassword' className='link_primary'>Forgot Password</Link>
        <p className="my-1 center">Don't have an account? <Link to='/register' className='link_primary'>Sign Up</Link></p>
      {/* </div> */}
    </div>
</div>
    </>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  // this will give us all the state found in auth.reducer.js
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
