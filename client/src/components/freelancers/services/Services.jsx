import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

// Redux
import { getServices } from '../../../redux/actions/service.actions'

import { connect } from 'react-redux'

import ServiceItem from './ServiceItem'

const Services = ({getServices, servicesList}) => {
  useEffect(() => {
    getServices()
  }, [getServices])

  console.log('services:', servicesList)

  return (
    <>
    <h1>Services page</h1>
    <div className="cntr">
      { servicesList.length > 0 ? (
        servicesList.map( service => (
        <ServiceItem key={service._id} service={service} />
      ))
      ) : <h4>No services were found...</h4> }
    </div>

       {/* <Service services={services}/> */}
    </>
  )
}

Services.propTypes = {
  getServices: PropTypes.func.isRequired,
  servicesList: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  servicesList: state?.service?.services || []
})

export default connect(mapStateToProps, { getServices })(Services)
// export default Services
