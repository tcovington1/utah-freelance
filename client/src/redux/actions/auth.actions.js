import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT
} from './types.actions'
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('/auth/me');

    dispatch({
      type: USER_LOADED,
      payload: res.data.data
    });

    
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

// Register User
export const register = ({
  firstName,
  lastName,
  email,
  role,
  password
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    role,
    password
  });

  try {
    const res = await axios.post('/auth/register', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => console.log(error))
    }
    dispatch({
      type: REGISTER_FAIL
    })
  }
}
// Login User
export const login = (
  email,
  password
) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const body = JSON.stringify({
    email,
    password
  });

  try {
    const res = await axios.post('/auth/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => console.log(error))
    }
    dispatch({
      type: LOGIN_FAIL
    })
  }
}

// Logout / Clear Profile
export const logout = () => async dispatch => {
  // dispatch({ type: LOGOUT })
  await axios.get('/auth/logout')

  dispatch({
    type: LOGOUT
  })
}