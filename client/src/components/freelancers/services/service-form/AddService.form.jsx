import React, { useState } from 'react'
//withRouter lets us use the history.push from profile.actions.js
import { Link, withRouter } from 'react-router-dom'
// import { addService } from '../../../redux/actions/service.actions'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//{ addService, history }
const AddService = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  // const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const { 
    name,
    description,
    price
   } = formData

   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

   const onSubmit = e => {
     e.preventDefault();
    //  addService(formData, history);
   }
   
  return (
    <>
      <h1 className="large text-primary center">
       Add A Service
      </h1> 
      {/* <p className="lead center"></p> */}
      <small>* = required fields</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          {/* <small className="form-text">Name of your Service (ex: Build a Website, photography, etc)</small> */}
          <input type="text" placeholder='Name' name='name' value={name} onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
          {/* <small className="form-text">Add a Price</small> */}
          <input type="number" min='0' step='any' placeholder='Price' name='price' value={price} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group">
          {/* <small className="form-text">Add a description</small> */}
          <textarea rows="4" cols="50" placeholder='Description' name='description' value={description} onChange={e => onChange(e)} />
        </div>
        <div className="cntr">
          <input type="submit" className='btn btn-primary my-1' />
          <Link to='/dashboard' className='btn btn-primary_inverted'>Go back</Link>
        </div>
      </form>
    </>
  )
}

// AddService.propTypes = {
//   //ptfr
//   addService: PropTypes.func.isRequired,
// }

                      //no mapStateToProps       //using withRouter here so we can use history                   
// export default connect(null, { addService })(withRouter(AddService))
export default AddService

// export default CreateFreelancer;
