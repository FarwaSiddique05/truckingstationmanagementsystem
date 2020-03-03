import {  ADDUSER } from '../action/adduser'


let initState = {
    userData:{}
}
 const useReducer = (state = initState, action) =>{
  switch (action.type) {
      case ADDUSER:
        console.log("in reducer", action.payload);
          return{
              ...state,
              userData : action.payload
          }
  
      default:
          return state
  }
 }
 export default  useReducer