import React, { useState } from 'react'
//withRouter lets us use the history.push from profile.actions.js
import { Link } from 'react-router-dom'
// import { createFreelancer } from '../../../redux/actions/freelancers.actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const CreateFreelancer = ({ createFreelancer, history }) => {
  const [formData, setFormData] = useState({
    photo: ''
  });


  const { 
   photo
   } = formData

   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

   const onSubmit = e => {
     e.preventDefault();
     createFreelancer(formData, history);
   }
   
  return (
    <>
      <h1 className="large text-primary center">
       Create Your Freelancer Profile
      </h1> 
      <p className="lead center">Let's get some information to make your profile stand out</p>
      <small>* = required fields</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <small className='form-text'>Give us an idea of your title.</small>
          <input type="file"/>
        </div>
        <div className="cntr-btn">
          <input type="submit" className='btn btn-primary my-1' />
          <button className='btn btn-light my-1' ><Link to='/dashboard' className='link_color-primary'>Go back</Link></button>
        </div>
      </form>
    </>
  )
}

CreateFreelancer.propTypes = {
  //ptfr
  createFreelancer: PropTypes.func.isRequired,
}

                      //no mapStateToProps       //using withRouter here so we can use history                   
export default connect(null, { createFreelancer })(withRouter(CreateFreelancer))

// export default CreateFreelancer;
