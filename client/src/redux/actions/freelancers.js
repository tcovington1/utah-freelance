import * as api from '../../api/index'

export const getFreelancers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFreelancers;
    // dispatch(action)
    // sends data in payload to freelancers reducer. Payload carriers the freelancers array
    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (error) {
    console.log(error.message)
  }
}