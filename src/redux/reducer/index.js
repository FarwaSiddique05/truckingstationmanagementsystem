import {combineReducers} from 'redux'
import login from './loginrudecer'
import User from './userReducer'
import party from './partyreducer'
export default combineReducers({
    login,
    User,
    party ,
})