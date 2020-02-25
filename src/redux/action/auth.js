

export const LOGIN = 'LOGIN'

export const login = (loginData)=>{
    console.log("in action", loginData);
    
    return {
        type: LOGIN,
        payload: loginData
    }
}