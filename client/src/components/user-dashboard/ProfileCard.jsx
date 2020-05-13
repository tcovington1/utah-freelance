import React from 'react'
import {Link} from 'react-router-dom'


const ProfileCard = ({id, NoPhoto, name, address, title, averageRating, photo, freelancer}) => {
  return (
    <>
    
      <div className="card_flex">
          <div className="card_img">
            {photo === 'no-photo.png' ? <img src={NoPhoto} alt="" className='round-img' />
            :
              <img src={'http://localhost:5000/api/v1/freelancers/1/photo'} alt="" className='round-img' />
            }
          </div>
          <div className="card_body">
            <Link to={`/freelancers/${freelancer ? freelancer.id : id}`} className='heading_main heading__primary'>{freelancer ? freelancer.name : name}</Link>
            <div className="badge">
              <p>{freelancer ? freelancer.address : address}</p>
            </div>
            <p className='heading_sub'>{freelancer ? freelancer.title : title}</p>
            <div className={freelancer ? '' : "card_rating"}>
            {freelancer ? freelancer.averageRating : averageRating}
            </div>
          </div>
        </div> 
    </>
  )
}


export default ProfileCard
