import React, {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import ProfileImg from '../../assets/Taylor_Covington_mob.jpeg'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'
import { deleteFreelancer } from '../../redux/actions/freelancers.actions';

const Profile = ({deleteFreelancer, profile, user}) => {
  const [isToggle, setIsToggle] = useState(false);

  const fullName = user.firstName + ' ' + user.lastName

  const { name, bio, website, phone, email, address} = profile;

  const deleteAcct = () => {
    //deleteFreelancer comes from freelancer.actions redux
    deleteFreelancer(profile.id);
    return <Redirect to='/dashboard' />
  }

  return (
    <>
    <div className="cntr profile_main">
      <img src={ProfileImg} alt="" className='round-img'/>
      <h1 className='heading'>Hi {user.firstName},</h1>
      {/* <h2>ID: {_id}</h2> */}
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>{website}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
    <div className="cntr">

    { !isToggle ?  <span className="btn btn-med btn-primary my-half" onClick={() => setIsToggle(!isToggle)}>More Options</span> 
    : (
      <>
       <Link className="btn btn-med btn-primary my-half" onClick={() => setIsToggle(!isToggle)}>Less Options</Link>
       <Link to={`/editfreelancer/${profile.id}`} className="btn btn-med btn-primary my-half">Edit Freelancer Profile</Link>
       <Link to='/addphoto' className="btn btn-med btn-primary my-half">Add a Photo</Link>
       <Link to='/addphoto' className="btn btn-med btn-light my-half">Add Services</Link>
       <button className="btn btn-med btn-delete my-half" onClick={deleteAcct}>Delete Freelancer</button>
       </>
       )}
     
       </div>
      <hr/>
      <div className="cntr profile_reviews">
        <p className="heading_sub">Here's what people are saying:</p>
        <p>Carousel of reviews will go here...</p>
      </div>
    </>
  )
}

Profile.propTypes = {
  deleteFreelancer: PropTypes.func.isRequired,
}

export default connect(null, { deleteFreelancer })(Profile)
