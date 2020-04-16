import axios from 'axios';
import setAlert from '../../components/layout/Alert'

import {
  UPDATE_FREELANCER_LIST,
  GET_FREELANCER,
  GET_PROFILE,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  FREELANCER_ERROR
} from './types.actions'

// Get all freelancers
export const getFreelancerList = () => async dispatch => {

  try {
    // console.log('getting profiles')
    const res = await axios.get('/freelancers');
    // console.log(res)
    const freelancerList = res?.data?.data || []

    dispatch({
      type: UPDATE_FREELANCER_LIST,
      freelancerList
    });
  } catch (error) {
    dispatch({
      type: FREELANCER_ERROR,
      payload: {
        msg: error.response
      }
    })
  }
}
// GET freelancer by ID
export const getFreelancerById = freelancerId => async dispatch => {
  //prevent flashing of past user profile
  try {
    console.log('getting freelancer')
    const res = await axios.get(`/freelancers/${freelancerId}`);
    const freelancer = res?.data?.data || []
    // debugger

    dispatch({
      type: GET_FREELANCER,
      freelancer
    });
  } catch (err) {
    dispatch({
      type: FREELANCER_ERROR,
      payload: {
        msg: err.response.statusText, status: err.response.status
      }
    });
  }
};

// Get users Freelancer profile

export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/freelancers/me');
    const profile = res?.data || []
    // console.log(profile)
    dispatch({
      type: GET_PROFILE,
      profile
    });
  } catch (err) {
    dispatch({
      type: FREELANCER_ERROR,
      payload: {
        msg: err.response.statusText, status: err.response.status
      }
    });
  }
};

// Create a freelancer

export const createFreelancer = (formData, history, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('/freelancers', formData, config);

    dispatch({
      type: GET_FREELANCER,
      payload: res.data
    });

    dispatch(setAlert('Profile Created', 'success'));

    // if(!edit) {
      history.push('/dashboard')
    // }
  } catch (err) {
    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: FREELANCER_ERROR,
      payload: {
        msg: err.response.statusText, status: err.response.status
      }
    });

  }
};
export const editFreelancer = (formData, history, id) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.put(`/freelancers/${id}`, formData, config);
    const profile = res?.data || []


    dispatch({
      type: UPDATE_PROFILE,
      profile
    });

    dispatch(setAlert('Profile Updated', 'success'));

    // if(!edit) {
      history.push('/dashboard')
    // }
  } catch (err) {
    console.log(err)
    // const errors = err.response.data.errors;

    // if(errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    // }

    dispatch({
      type: FREELANCER_ERROR,
      // payload: {
      //   msg: err.response.statusText, status: err.response.status
      // }
    });

  }
};

// Add a photo