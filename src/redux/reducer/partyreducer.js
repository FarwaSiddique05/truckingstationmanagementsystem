import {ADDPARTY} from '../action/addparty'


export const initState = {
    partyData:{}
}
  const partyReducer = ( state = initState, action) =>{
      switch (action.type) {
        case ADDPARTY:
             console.log("in  a reducer", action.payload);
          return{
              ...state,
              partyData : action.payload
          }

        default:
          return state
      }
  }
  export default partyReducer