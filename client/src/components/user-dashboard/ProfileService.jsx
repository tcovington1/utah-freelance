import React from 'react'

const ProfileService = ({service: {
  name,
  description,
  price
}}) => {
  return (
    <>
    <div className="my-1">
      <p>{name}</p>
      <p>{description}</p>
      <p>${price}</p>
    </div>
    </>
  )
}

export default ProfileService