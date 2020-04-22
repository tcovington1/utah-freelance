import React from 'react'
import Freelancer from '../FreelancerItem'

const ServiceItem = ({service: {
  name,
  description,
  price,
  freelancer
}}) => {
  return (
    <>
     <div className="cntr">
      <p>{freelancer.name}</p>
      <p>{ name }</p>
      <p>{ description }</p>
      <p>${ price }</p>
      </div> 
    </>
  )
}

export default ServiceItem
