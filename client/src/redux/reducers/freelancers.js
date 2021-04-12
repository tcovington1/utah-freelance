export default (freelancers = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload; //payload is the data from api call in actions
    case 'CREATE':
      return freelancers;
    default:
      return freelancers;
  }
}

 // Request comes in like this: 
    //   count: 2
    // data: (2) [{…}, {…}]
    // pagination: {}
    // sucess: true
    // __proto__: Object
    // type: "FETCH_ALL"