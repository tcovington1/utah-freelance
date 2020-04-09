import React from 'react'
import { Link } from 'react-router-dom'
import './layout.scss'

const Landing = () => {
  return (
    <section className="landing">
      <div className="light-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Utah Freelance</h1>
          {/* style={{color: 'black'}} */}
          <p className="lead" >We connect you to Utah Freelancers.</p>
          <div className="buttons">
            <Link to='/register' className="btn btn-multi_primary btn-med rm-box-shadow">Browse Freelancers</Link>
            <Link to='/login' className="btn btn-light">Register As Freelancer</Link>
          </div>
          <p className="my-1" >Already have an account? <Link to='/login' className='link'>Sign In</Link></p>

        </div>
      </div>
    </section>
  )
}

export default Landing
