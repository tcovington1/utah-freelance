import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetPassword } from '../../redux/actions/auth.actions'


const ForgotPassword = ({ resetPassword }) => {
  const [formData, setFormData] = useState({email: ''})

  const { email } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <form className='form' onSubmit={ e => {
        e.preventDefault();
        resetPassword(formData)
      }}>
        <label>What is your email address?</label>
        <input type="text" name='email' value={email} onChange={e => onChange(e)} required/>
        <button className='btn'>Reset Password</button>
      </form>
    </div>
  )
}

ForgotPassword.propTypes = {
  //ptfr
  resetPassword: PropTypes.func.isRequired,
}

export default connect(null, {resetPassword})(ForgotPassword)
