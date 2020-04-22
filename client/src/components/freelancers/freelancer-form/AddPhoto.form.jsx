import React, { useState, useEffect } from 'react'
//withRouter lets us use the history.push from profile.actions.js
import { Link, withRouter } from 'react-router-dom'
import { addPhoto, getCurrentProfile } from '../../../redux/actions/freelancers.actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const AddPhoto = ({ addPhoto, getCurrentProfile, profile, history, match }) => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');

  const { 
   photo
   } = file

   useEffect(() => {
     getCurrentProfile();
   }, [getCurrentProfile])

   const onChange = e => {
     console.log(e.target.files[0])
     setFile(e.target.files[0])
     setFilename(e.target.files[0].name)

   }
  //  console.log(profile)

   const onSubmit = e => {
     e.preventDefault();
     const formData = new FormData();
     formData.append('file', file)
     addPhoto(formData, profile.id, history );
   }
   
  return (
    <>
      <h1 className="large text-primary center">
       Add A Photo
      </h1> 
      <p className="lead center">Let's add a photo to your freelancer profile.</p>
      {/* <small>* = required fields</small> */}
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          {/* <small className='form-text'>Give us an idea of your title.</small> */}
          <input type="file" value={photo} onChange={e => onChange(e)}/>
          <label htmlFor="photo">{filename}</label>
        </div>
        <div className="cntr">
          <input type="submit" className='btn btn-primary my-1' />
          <button className='btn btn-light my-1' ><Link to='/dashboard' className='link_color-primary'>Go back</Link></button>
        </div>
      </form>
    </>
  )
}

AddPhoto.propTypes = {
  //ptfr
  addPhoto: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  profile: state?.freelancer?.profile || []
})

                      //no mapStateToProps       //using withRouter here so we can use history                   
export default connect(mapStateToProps, { addPhoto, getCurrentProfile })(withRouter(AddPhoto))

// export default AddPhoto;
