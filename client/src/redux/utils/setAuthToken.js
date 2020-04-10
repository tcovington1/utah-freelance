// funtion that takes in the token, if it's there it'll add to headers. If not it'll delete from header
import axios from 'axios';

const setAuthToken = token => {
  //is there a token in localStorage?
  if(token) {
    // if there is, set global header
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
}

export default setAuthToken;