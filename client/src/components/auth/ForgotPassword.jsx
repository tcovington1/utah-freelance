import React from 'react'
import {Link} from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div>
      <h1>Please check your email for a reset link.</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default ForgotPassword
