import axios from 'axios';
import setAlert from '../../components/layout/Alert'

import {
  UPDATE_FREELANCER_LIST,
  GET_FREELANCER,
  GET_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE,
  CLEAR_PROFILE,
  FREELANCER_ERROR
} from './types.actions'

//* Get all freelancers
export const getFreelancerList = () => async dispatch => {
  try {
    // API call to back-end to get data
    const res = await axios.get('/freelancers');
    // storing data we receive in a variable to use
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

//* GET freelancer by ID
export const getFreelancerById = freelancerId => async dispatch => {
  //prevent flashing of past user profile
  try {
    // Getting freelncer by ID being passed in from component
    const res = await axios.get(`/freelancers/${freelancerId}`);
    // Storing freelancer data received in a variable to use
    const freelancer = res?.data?.data || []

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

//* Get users Freelancer profile
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

//* Create a freelancer
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
    console.log('createFreelancer Error:', err)
    // const errors = err.response.data.errors;

    // if(errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    // }

    dispatch({
      type: FREELANCER_ERROR,
      payload: {
        // msg: err.response.statusText, status: err.response.status
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
      payload: {
        msg: err, status: err
      }
    });

  }
};

// Add a photo
export const addPhoto = (file, id) => async dispatch => {
  try {
    // const res = await axios.put(`/freelancers/${id}/photo`);
     await axios.put(`/freelancers/${id}/photo`, file);
  
    // dispatch({
    //   type: ADD_PHOTO,
    //   payload: res.data
    // });
    
  } catch (error) {
    console.log(error)
    dispatch({
      type: FREELANCER_ERROR,
      payload: {
        // msg: err.response.statusText, status: err.response.status
      }
    });
  }

}


// Delete Freelancer profile
export const deleteFreelancer = (id) => async dispatch => {
  if(window.confirm('Are you sure you want to delete your profile?')){    
    try {
     await axios.delete(`freelancers/${id}`);
  
      dispatch({
        type: CLEAR_PROFILE,
      });
      dispatch({
        type: DELETE_PROFILE,
      });
  
      dispatch(setAlert('Your account has been deleted'));
  
    } catch (err) {
      console.log(err)
      dispatch({
        type: FREELANCER_ERROR,
        payload: {
          // msg: err.response.statusText, status: err.response.status
        }
      });
    }
  }
};