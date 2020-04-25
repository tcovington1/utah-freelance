import React from 'react'
import { Link } from 'react-router-dom'
import './layout.scss'
import Navbar from './Navbar'

const Landing = () => {
  return (
    <Navbar />
    <section className="landing">
      <div className="light-overlay">
        <div className="landing-inner">
          <h1 className="x-large heading heading">UTAH FREELANCE</h1>
          {/* style={{color: 'black'}} */}
          <h5 className="lead" >We connect you to <br></br>Utah Freelancers</h5>
          <div className="buttons">
            <Link to='/freelancers' className="btn btn-primary btn-med my-1 ">Browse Freelancers</Link>
            <Link to='/login' className="btn btn-med btn-primary_inverted my-half">Register As Freelancer</Link>
          </div>
          <p className="my-1" >Already have an account? <Link to='/login' className='link_primary'>Sign In</Link></p>

        </div>
      </div>
    </section>
  )
}

export default Landing
