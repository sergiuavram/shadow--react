import axiosBaseUrl from '../../axios/baseUrl';
import { userTypes } from './user.types';

export const signup = (data, redirectAndResetAfterSignup, errorHandler) => async dispatch => {
    try {
        const response = await axiosBaseUrl({
            url: '/auth/signup/',
            method: 'POST',
            data,
            // headers: { 'Authorization': `Bearer ${user}` }, // just for later.
        });

        redirectAndResetAfterSignup();

        dispatch({
            type: userTypes.SET_USER,
            payload: response.data.token
        });
    } catch (error) {
        console.log(error);
        errorHandler.setErrorSignup(true);
        errorHandler.setErrorMsgSignup(error.response.data.error);
    }
}

export const login = (data, redirectAndResetAfterLogin, errorHandler) => async dispatch => {
    try {
        const response = await axiosBaseUrl({
            url: '/auth/login',
            method: 'POST',
            data,
        })

        redirectAndResetAfterLogin();
        console.log('login user', response.data.token)

        dispatch({
            type: userTypes.SET_USER,
            payload: response.data.token // be aware here of what data you send
        });
    } catch (error) {
        errorHandler.setErrorLogin(true);
        if (error.response) {
            errorHandler.setErrorMsg(error.response.data.error)
            // console.log(error.response.data)
        } else {
            errorHandler.setErrorMsg(error.message)
            // console.log(error.message)
        }
    }
}

export const chekLocalStorage = () => dispatch => {
    const savedUser = localStorage.getItem('user');
    console.log('checking local storage', savedUser)
    if (!(savedUser === null)) {
        dispatch({
            type: userTypes.SET_USER,
            payload: savedUser
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: userTypes.LOGOUT
    });
}