export const loginStart =() =>({
    type:"LOGIN_START",
});
export const loginSucess =(user) =>({
    payload:user,
    type:"LOGIN_SUCCESS",
});
export const loginFailure =() =>({
    type:"LOGIN_FALIURE",
    
});