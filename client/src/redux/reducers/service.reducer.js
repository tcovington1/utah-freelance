import {
  SERVICES_LIST,
  GET_FREELANCER_SERVICES,
  SERVICE_ERROR
} from '../actions/types.actions'


const initialState = {
  services: [],
  service: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, services, payload } = action;

  switch(type) {
    case SERVICES_LIST:
    case GET_FREELANCER_SERVICES:
      return {
        ...state, 
              //payload comes form action file
        services,
        loading: false
      }
      case SERVICE_ERROR:
      return {
        ...state, 
              //payload comes form action file
        error: payload,
        loading: false
      }
    default:
    return state
  }
}