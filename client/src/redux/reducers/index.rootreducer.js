import {
  combineReducers
} from 'redux'
import alert from '../reducers/alert.reducer'
import auth from '../reducers/auth.reducer'
import profile from '../reducers/profile.reducer'
import freelancer from '../reducers/freelancer.reducer'
import service from '../reducers/service.reducer'

//any reducers you create will go in here
export default combineReducers({
  alert,
  auth,
  profile,
  freelancer,
  service
});