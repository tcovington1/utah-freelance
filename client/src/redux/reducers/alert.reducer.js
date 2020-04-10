//state and actions for alerts

import { SET_ALERT, REMOVE_ALERT } from '../actions/types.actions';

const initialState = [
  // {
  //   id: 1,
  //   msg: 'Please log in',
  //   alertType: 'success'
  // },
];
                                            //action contains both a type and payload (data)
export default function(state = initialState, action) {
  const { type, payload } = action;
  //action type needs to be evaluated with switch
  switch(type) {
      //adding an alert
    case SET_ALERT:
      //state is immutable, we have to include state thats there then add our alert
      return [...state, payload];
    case REMOVE_ALERT:                        //the payload in this case will be the id but it can be whatever we want
      return state.filter(alert => alert.id !== payload );
    default:
      return state;
  }
}