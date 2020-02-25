import { LOGIN } from '../action/auth'


let initState = {
    loginData: {}
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log("in reducer", action.payload);

            return {
                ...state,
                loginData: action.payload
            }

        default:
            return state

    }
}


export default authReducer