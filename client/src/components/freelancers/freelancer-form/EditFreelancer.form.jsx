import React, { useState, useEffect } from 'react'
//withRouter lets us use the history.push from profile.actions.js
import { Link, withRouter, Redirect } from 'react-router-dom'
import { editFreelancer, getCurrentProfile } from '../../../redux/actions/freelancers.actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const EditFreelancer = ({ editFreelancer, getCurrentProfile , profile , history }) => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    website: '',
    phone: '',
    email: '',
    address: '',
    title: '',
    
  });

  useEffect(() => {
    getCurrentProfile();

  // const [displaySocialInputs, toggleSocialInputs] = useState(false);

  setFormData({
    name: profile.loading || !profile.name ? '' : profile.name,
    bio: profile.loading || !profile.bio ? '' : profile.bio,
    website: profile.loading || !profile.website ? '' : profile.website,
    phone: profile.loading || !profile.phone ? '' : profile.phone,
    email: profile.loading || !profile.email ? '' : profile.email,
    address: profile.loading || !profile.address ? '' : profile.address,
    title: profile.loading || !profile.title ? '' : profile.title,
  });
}, [profile.loading, getCurrentProfile]);

  const { 
    name,
    bio,
    website,
    phone,
    email,
    address,
    title
   } = formData

   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

   const onSubmit = e => {
     e.preventDefault();
     editFreelancer(formData, history, profile.id);
     return <Redirect to='/dashboard' />
   }
   
  return (
    <>
      <h1 className="large text-primary center">
       Edit Your Freelancer Profile
      </h1> 
      <p className="lead center">Let's get some information to make your profile stand out</p>
      <small>* = required fields</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <small className='form-text'>Give us an idea of your title.</small>
          <select name="title" value={title} onChange={e => onChange(e)}>
            <option value="0">* Select your Freelancer Title</option>
            <option value="Developer">Developer</option>
            <option value="Front-End Developer">Software Developer</option>
            <option value="Front-End Developer">Front-End Developer</option>
            <option value="Back-End Developer">Back-End Developer</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Artist">Artist</option>
            <option value="Marketing">Marketing</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <small className="form-text">Please provide your name or the freelance company name</small>
          <input type="text" placeholder='Name' name='name' value={name} onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
          <small className="form-text">Please provide the email address for your freelance business</small>
          <input type="text" placeholder='Email' name='email' value={email} onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
          <small className="form-text">Could be your own or a company website</small>
          <input type="text" placeholder='Website' name='website' value={website} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group">
          <small className="form-text">Provide the best number to contact you.</small>
          <input type="text" placeholder='Phone' name='phone' value={phone} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group">
          <small className="form-text">City & State suggested (eg. Salt Lake City, UT)</small>
          <input type="text" placeholder='Address' name='address' value={address} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group">
          <small className="form-text">Help us get to know your business better</small>
          <textarea placeholder='A short bio of yourself' name='bio' value={bio} onChange={e => onChange(e)}/>
        </div>

        {/* <div className="my-2">
          <span onClick={() => toggleSocialInputs(!displaySocialInputs)} className="btn btn-multi_primary">
            Add Social Network Links
          </span>
          <span>Optional</span>

        {displaySocialInputs && <Fragment>
        
          <div className="form-group social-input">
            <InlineIcon icon={twitterIcon} color="#38a1f3" width="4rem" style={{paddingRight: '.5rem'}}/>
            <input type="text" placeholder='Twitter URL' name='twitter' value={twitter} onChange={e => onChange(e)}/>
          </div>
          <div className="form-group social-input">
            <InlineIcon icon={facebookIcon} color="#3b5998" width="4rem" style={{paddingRight: '.5rem'}}/>
            <input type="text" placeholder='Facebook URL' name='facebook' value={facebook} onChange={e => onChange(e)}/>
          </div>
          <div className="form-group social-input">
            <InlineIcon icon={linkedinIcon} color="#0077b5" width="4rem" style={{paddingRight: '.5rem'}}/>
            <input type="text" placeholder='Linkedin URL' name='linkedin' value={linkedin} onChange={e => onChange(e)}/>
          </div>
          <div className="form-group social-input">
            <InlineIcon icon={youtubeIcon} color="#c4302b" width="4rem" style={{paddingRight: '.5rem'}}/>
            <input type="text" placeholder='YouTube URL' name='youtube' value={youtube} onChange={e => onChange(e)}/>
          </div>
          <div className="form-group social-input">
            <InlineIcon icon={instagramIcon} color="#3f729b" width="4rem" style={{paddingRight: '.5rem'}} />
            <input type="text" placeholder='Instagram URL' name='instagram' value={instagram} onChange={e => onChange(e)}/>
          </div>
        
        </Fragment>}
        </div> */}
        <div className="cntr">
          <input type="submit" className='btn btn-primary btn-med my-1' />
          <button className='btn btn-light btn-med my-1' ><Link to='/dashboard' className='link_color-primary'>Go back</Link></button>
        </div>
      </form>
    </>
  )
}

EditFreelancer.propTypes = {
  //ptfr
  editFreelancer: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  profile: state?.freelancer?.profile || []
})

                             //using withRouter here so we can use history                   
export default connect(mapStateToProps, { editFreelancer, getCurrentProfile })(withRouter(EditFreelancer))

// export default CreateFreelancer;
