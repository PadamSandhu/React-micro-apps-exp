export default (state = {page: 0}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       page: action.payload
      }
     default:
      return state
    }
   }