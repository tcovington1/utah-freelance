import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Landing = () => {
  return (
    <>
    <Navbar />
    <section className="header">
          <div className='header__text-box'>
            <h1 className="x-large heading heading_main" style={{letterSpacing: '7.5px', fontSize: '4.5rem'}}>UTAH FREELANCE</h1>
            {/* style={{color: 'black'}} */}
            <h5 className="lead my-2" >We connect you to Utah Freelancers</h5>
            <div className="buttons">
              <Link to='/freelancers' className="btn btn-primary btn-med my-1 ">Browse Freelancers</Link>
              <Link to='/login' className="btn btn-med btn-primary_inverted my-half">Register As Freelancer</Link>
            </div>
            {/* <p className="my-2" >Already have an account? <Link to='/login' className='link_primary'>Sign In</Link></p> */}
          </div>
    </section>
    </>
  )
}

export default Landing
