import React from 'react'

const ProfileService = ({service: {
  name,
  description,
  price
}}) => {
  return (
    <>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </>
  )
}

export default ProfileService