// import uuid from 'uuid';
import uuid from 'uuid/v4'
import { SET_ALERT, REMOVE_ALERT } from './types.actions';

//setAlert dispatches what setAlert is to the reducer to pass the state
                          // we can do this because of thunk middleware
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id}), timeout);
}; 