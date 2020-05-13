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
import Navbar from '../layout/Navbar'
import AddPhotoForm from '../freelancers/freelancer-form/AddPhoto.form';
import ProfileCard from './ProfileCard';

// ReactModal.defaultStyles.content.left = '245';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    
  }
};

const Profile = ({deleteFreelancer, getProfileServices, profile, user, profileServices}) => {
  const [isOptionsToggle, setIsOptionsToggle] = useState(false);
  const [isServicesToggle, setIsServicesToggle] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const fullName = user.firstName + ' ' + user.lastName

  const { id, photo, name, bio, website, phone, email, address, title, averageRating} = profile;

  useEffect(() => {
    getProfileServices(profile.id)
  }, [getProfileServices])


  // function getTitles(title) {
  //   title.map(title => {
  //   //  return <p>{title}</p>
  //   console.log(title)
  //   })
  // }

  const deleteAcct = () => {
    //deleteFreelancer comes from freelancer.actions redux
    deleteFreelancer(profile.id);
    return <Redirect to='/dashboard' />
  }

  return (
    <>
     {/* <Breakpoint medium up>
        <LoggedInNav />
      </Breakpoint>
    <Breakpoint small down>
        <Navbar />
      </Breakpoint> */}
    <div className="profile_main">
      <h1 className='heading_main' style={{padding: '3rem 5rem'}}>Manage Freelancer Profile</h1>

      <div className="card card_profile">
       <ProfileCard id={id} NoPhoto={NoPhoto} photo={photo} name={name} address ={address} title={title} averageRating={averageRating}/>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <button className="btn btn-med btn-primary my-half" onClick={() => setIsEditModalOpen(true)} > Edit Freelancer </button>
            <Modal isOpen={isEditModalOpen} onRequestClose={() => setIsEditModalOpen(false)}
              style={customStyles}
            >
              <EditFreelancer modal={isEditModalOpen} setModal={setIsEditModalOpen}/>
            </Modal>
              <button className="btn btn-med btn-gray my-half" onClick={() => setIsPhotoModalOpen(true)}>Add Photo</button>
              <Modal isOpen={isPhotoModalOpen} onRequestClose={() => setIsPhotoModalOpen(false)}
              style={customStyles}
            >
              <AddPhotoForm modal={isPhotoModalOpen} setModal={setIsPhotoModalOpen}/>
            </Modal>
            <button className="btn btn-med btn-delete my-half" onClick={deleteAcct}>Delete Freelancer</button>
          </div>
          <p>* You can only add one freelancer per account.</p>

          <p> * You must be affiliated with the freelancer in some way in order to add it to Utah Freelance.</p>

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
      </>
      )}
      
      </div>
    <hr className='my-1'/> */}

      
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
