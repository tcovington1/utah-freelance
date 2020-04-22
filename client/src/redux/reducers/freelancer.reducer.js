import { 
  GET_FREELANCER, 
  GET_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE, 
  CLEAR_PROFILE, 
  FREELANCER_ERROR, 
  UPDATE_FREELANCER_LIST,
  ADD_PHOTO
} from "../actions/types.actions";

const initialState = {
  freelancer: null,
  freelancerList: [],
  profile: [],
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, freelancerList, freelancer, profile, payload } = action;

  switch(type) {
    case GET_FREELANCER:
      return {
        ...state,
        freelancer,
        loading: false
      };
    case UPDATE_FREELANCER_LIST:
      return {
        ...state,
        freelancerList,
        loading: false
      }
    case ADD_PHOTO:
      return {
        ...state,
        payload,
        loading: false
      }
      case GET_PROFILE:
      case  UPDATE_PROFILE:
        return {
          ...state,
          profile,
          loading: false
        }
      case FREELANCER_ERROR:
        return {
          ...state,
          // error: payload,
          loading: false,
          freelancer: null
        };
      case CLEAR_PROFILE:
        return {
          ...state,
          profile: null,
          loading: false
        };

        default: 
          return state;
  }
}