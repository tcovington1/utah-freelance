import React, {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import NoPhoto from '../../assets/no-photo.png'
import PropTypes from 'prop-types'
// import photo from `../../../../public/uploads/${photo}`

import ProfileService from './ProfileService'

// Redux
import { connect } from 'react-redux'
import { deleteFreelancer } from '../../redux/actions/freelancers.actions';
import { getProfileServices } from '../../redux/actions/service.actions';

// Icons
import { Icon, InlineIcon } from '@iconify/react';
import starIcon from '@iconify/icons-mdi/star';


const Profile = ({deleteFreelancer, getProfileServices, profile, user, profileServices}) => {
  const [isOptionsToggle, setIsOptionsToggle] = useState(false);
  const [isServicesToggle, setIsServicesToggle] = useState(false);

  const fullName = user.firstName + ' ' + user.lastName

  const { photo, name, bio, website, phone, email, address} = profile;

  useEffect(() => {
    getProfileServices(profile.id)
  }, [getProfileServices])

  const deleteAcct = () => {
    //deleteFreelancer comes from freelancer.actions redux
    deleteFreelancer(profile.id);
    return <Redirect to='/dashboard' />
  }

  return (
    <>
    <div className="cntr profile_main">
      <div className="profile_heading">
        <div className="profile_box-pic">
          {photo === 'no-photo.png' ? <img src={NoPhoto} alt="" className='round-img' style={{position: 'absolute', left: '10px', top: '12px'}}/>
          :
            <img src={'http://localhost:5000/api/v1/freelancers/1/photo'} alt="" className='round-img' style={{position: 'absolute', left: '10px', top: '12px'}}/>
          }
        </div>
        <div className="profile_box-data">
          <h1 className='heading-main'>{name}</h1>
          <p>{phone}</p>
          <p>{email}</p>
          <div className="profile-rating">
          <InlineIcon icon={starIcon} color="#F49D1E" width='2.5rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='2.5rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='2.5rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='2.5rem'/>
          </div>
        </div>
      </div>
      <div className="profile_body">
        <div className="profile_body-content">
        <p className="heading_sub heading__primary">About:</p>
          {/* <p>{photo}</p> */}
          <h3>{bio}</h3>
          <p>{website}</p>
          
        </div>
        <div className="cntr">
        <p className="heading_sub heading__primary">Services:</p>

        { profileServices ? (
            profileServices.map( service => (
            <ProfileService key={service._id} service={service} />
          )))
          : <h4>No services were found...</h4> }
        { !isServicesToggle ?  <span className="btn btn-med btn-primary" onClick={() => setIsServicesToggle(!isServicesToggle)}>View Services</span> 
          : 
          <button className="btn btn-med btn-primary" onClick={() => setIsServicesToggle(!isServicesToggle)}>Hide Services</button>
        
        }
    </div>
        
      </div>
    </div>
    <div className="cntr">
    {  }
    { !isOptionsToggle ?  <span className="btn btn-med btn-primary my-half" onClick={() => setIsOptionsToggle(!isOptionsToggle)}>More Options</span> 
    : (
      <>
      <button className="btn btn-med btn-primary my-half" onClick={() => setIsOptionsToggle(!isOptionsToggle)}>Less Options</button>
       <Link to={`/editfreelancer/${profile.id}`} className="btn btn-med btn-light my-half">Edit Freelancer Profile</Link>
       <Link to={`/freelancers/${profile.id}/addservice`} className="btn btn-med btn-light my-half">Add Services</Link>
       <Link to={`/freelancers/${profile.id}/addphoto`} className="btn btn-med btn-lightest my-half">Add A Photo</Link>
       <button className="btn btn-med btn-delete my-half" onClick={deleteAcct}>Delete Freelancer</button>
       </>
       )}
     
       </div>
      <hr className='my-1'/>

      {/* Need to make this it's OWN component */}
      <div className="profile_reviews">
        <div className="cntr">
          <p className="heading_sub heading__primary">Here's What People Are Saying:</p>
        </div>
        <div className="card_review">
          <div className="card_img">
            <img src={NoPhoto} alt="" className='round-img round-img_sm' style={{marginRight: '1rem'}} />
          </div>
          <div className="profile_reviews">
            <h3>John Doe</h3>
          <InlineIcon icon={starIcon} color="#F49D1E" width='2rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='2rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='2rem'/>
          <p className="heading_review">I really liked working with Tom Design. They did a great job.</p>
          </div>
        </div>
      </div>
    </>
  )
}

Profile.propTypes = {
  deleteFreelancer: PropTypes.func.isRequired,
  getProfileServices: PropTypes.func.isRequired,
  profileServices: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profileServices: state?.service?.services || []
})

export default connect(mapStateToProps, { deleteFreelancer, getProfileServices })(Profile)
