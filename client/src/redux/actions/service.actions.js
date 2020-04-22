import axios from 'axios'
import {
  SERVICES_LIST,
  GET_FREELANCER_SERVICES,
  SERVICE_ERROR
} from './types.actions'

// Get All Services
export const getServices = () => async dispatch => {
  try {
    // debugger
    const res = await axios.get(`/services`);
    const services = res?.data?.data || []
    console.log(services)

    dispatch({
      type: SERVICES_LIST,
      //this payload is then passed to reducer
      services
    })
  } catch (err) {
    console.log(err)
    // dispatch({
    //   type: SERVICE_ERROR,
    //   payload: {
    //     // msg: err.response.statusText, status: err.response.status
    //   }
    // });
  }
}

// Get Freelancer Services
export const getProfileServices = (id) => async dispatch => {
  try {
    const res = await axios.get(`/freelancers/${id}/services`);
    const services = res?.data?.data || []

    dispatch({
      type: GET_FREELANCER_SERVICES,
      //this payload is then passed to reducer
      services
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: SERVICE_ERROR,
      payload: {
        // msg: err.response.statusText, status: err.response.status
      }
    });
  }
}