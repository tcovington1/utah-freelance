import { GET_FREELANCER, FREELANCERS_ERROR, UPDATE_FREELANCER_LIST} from "../actions/types.actions";

const initialState = {
  freelancer: null,
  freelancerList: [],
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, freelancerList } = action;

  switch(type) {
    // case GET_FREELANCER:
    //   return {
    //     ...state,
    //     profile: payload,
    //     loading: false
    //   };
    case UPDATE_FREELANCER_LIST:
      return {
        ...state,
        freelancerList,
        loading: false
      }
      case FREELANCERS_ERROR:
        return {
          ...state,
          // error: payload,
          loading: false,
          freelancer: null
        };
      // case CLEAR_PROFILE:
      //   return {
      //     ...state,
      //     profile: null,
      //     repos: [],
      //     loading: false
      //   };

        default: 
          return state;
  }
}