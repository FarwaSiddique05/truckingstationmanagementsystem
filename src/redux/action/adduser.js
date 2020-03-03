


export const ADDUSER = "ADDUSER"
export const adduser = (userData) =>{
    return {
      type: ADDUSER,
      payload : userData
    };
}