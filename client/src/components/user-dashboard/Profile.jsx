import React, {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import  { Breakpoint } from 'react-socks';
import Modal from 'react-modal'
import NoPhoto from '../../assets/no-photo.png'
import PropTypes from 'prop-types'
// import photo from `../../../../public/uploads/${photo}`

import ProfileService from './ProfileService'
import EditFreelancer from '../freelancers/freelancer-form/EditFreelancer.form'

// Redux
import { connect } from 'react-redux'
import { deleteFreelancer } from '../../redux/actions/freelancers.actions';
import { getProfileServices } from '../../redux/actions/service.actions';

// Icons
import { Icon, InlineIcon } from '@iconify/react';
import starIcon from '@iconify/icons-mdi/star';
import LoggedInNav from '../layout/LoggedInNav'
import Navbar from '../layout/Navbar'
import AddPhotoForm from '../freelancers/freelancer-form/AddPhoto.form';

// ReactModal.defaultStyles.content.left = '245';

const Profile = ({deleteFreelancer, getProfileServices, profile, user, profileServices}) => {
  const [isOptionsToggle, setIsOptionsToggle] = useState(false);
  const [isServicesToggle, setIsServicesToggle] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

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
     <Breakpoint medium up>
        <LoggedInNav />
      </Breakpoint>
    <Breakpoint small down>
        <Navbar />
      </Breakpoint>
    <div className="profile_main">
      <h1 className='heading_main' style={{padding: '3rem 5rem'}}>Dashboard</h1>
      <div className="profile-flex" style={{display: 'flex', marginLeft: '5rem'}}>

      <div className="card card_profile cntr">
        <h1>Freelancer Profile</h1>
        <div className="">
          {photo === 'no-photo.png' ? <img src={NoPhoto} alt="" className='round-img' />
          :
            <img src={'http://localhost:5000/api/v1/freelancers/1/photo'} alt="" className='round-img' />
          }
        </div>

      <h3>{name}</h3>
        <p className="heading_sub heading__primary">About:</p>
          {/* <p>{photo}</p> */}
          <h3>{bio}</h3>
          <p>{website}</p>
          <p>{phone}</p>
          <p>{email}</p>
          <div className="profile-rating">
          <InlineIcon icon={starIcon} color="#F49D1E" width='2.5rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='2.5rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='2.5rem'/>
          <InlineIcon icon={starIcon} color="#F49D1E" width='2.5rem'/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <button className="btn btn-med btn-lightest my-half" onClick={() => setIsEditModalOpen(true)} > Edit Freelancer </button>
            <Modal isOpen={isEditModalOpen} onRequestClose={() => setIsEditModalOpen(false)}
              style={{
                content: {
                  width: '50%'

                }
              }}
            >
              <EditFreelancer modal={isEditModalOpen} setModal={setIsEditModalOpen}/>
            </Modal>
              <button className="btn btn-med btn-lightest my-half" onClick={() => setIsPhotoModalOpen(true)}>Add Photo</button>
              <Modal isOpen={isPhotoModalOpen} onRequestClose={() => setIsPhotoModalOpen(false)}
              style={{
                content: {
                  width: '50%'
                }
              }}
            >
              <AddPhotoForm modal={isPhotoModalOpen} setModal={setIsPhotoModalOpen}/>
            </Modal>
            {/* <Link to={`/editfreelancer/${profile.id}`} className="btn btn-med btn-light my-half">Edit Freelancer Profile</Link> */}
            {/* <Link to={`/freelancers/${profile.id}/addphoto`} className="btn btn-med btn-lightest my-half">Add A Photo</Link> */}
          </div>

      </div>
        
    {/* <div className="cntr">
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
    <hr className='my-1'/> */}

      {/* Need to make this it's OWN component */}
      <div className=' profile profile_side'>

      <div className="card card_review" >
        <p className="heading_sub heading__primary cntr">Services You Offer:</p>

        { profileServices ? (
          profileServices.map( service => (
            <ProfileService key={service._id} service={service} />
            )))
            : <h4>No services were found...</h4> }
        { !isServicesToggle ?  <span className="btn btn-med btn-primary" onClick={() => setIsServicesToggle(!isServicesToggle)}>View Services</span> 
          : 
          <button className="btn btn-med btn-primary" onClick={() => setIsServicesToggle(!isServicesToggle)}>Hide Services</button>
          
        }
        {/* <Link to={`/freelancers/${profile.id}/addservice`} className="btn btn-med btn-light my-half">Add Services</Link> */}

        </div>

        {/* Reviews */}
        <div className="card card_review">
          <div className="cntr">
            <p className="heading_sub heading__primary">Here's What People Are Saying:</p>
          </div>
          <div className="">
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
            <Link  className="btn btn-med btn-primary">View Reviews</Link>
          </div>
        </div>
        {/*  */}
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
