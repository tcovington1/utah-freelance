import axios from 'axios';
import {
  UPDATE_FREELANCER_LIST,
  FREELANCERS_ERROR
} from './types.actions'

// Get all freelancers
export const getFreelancerList = () => async dispatch => {

  try {
    console.log('getting profiles')
    const res = await axios.get('/freelancers');
    console.log(res)
    const freelancerList = res?.data?.data || []

    dispatch({
      type: UPDATE_FREELANCER_LIST,
      freelancerList
    });
  } catch (error) {
    dispatch({
      type: FREELANCERS_ERROR,
      payload: {
        msg: error.response
      }
    })
  }
}