import axios from 'axios';
import { configLoadUser, configGoogle, configCheck, config, configMultipart  } from '../../Config/Config'
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_SUCCESS_BY_ID,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,
    LOGOUT
} from '../Constants/types';



export const createprofile = async (body) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/profiles/create/`, body, configMultipart);
    } catch (err) {
        console.error(err.response.data);
    } 
};


export const load_user_by_id = (id) => async dispatch => {
   
    if (localStorage.getItem('auth_token'))  {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/${id}/`, configLoadUser);
            dispatch({
                type: USER_LOADED_SUCCESS_BY_ID,
                payload: { id: res.data.id, is_superuser: res.data.is_superuser, username: res.data.username }
            });
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};




export const load_user = () => async dispatch => {
   
    if (localStorage.getItem('auth_token'))  {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, configLoadUser);
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            });
            dispatch(load_user_by_id(res.data.id));
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};

export const googleAuthenticate = (state, code) => async dispatch => {
    if (state && code && !localStorage.getItem('auth_token')) {

        const details = {
            'state': state,
            'code': code
        };

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?${formBody}`, configGoogle);

            dispatch({
                type: GOOGLE_AUTH_SUCCESS,
                payload: res.data
            });

            dispatch(load_user());
        } catch (err) {
            dispatch({
                type: GOOGLE_AUTH_FAIL
            });
        }
    }
};




export const login = (body) => async dispatch => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/token/login/`, body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }); 
        dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response
        })
    }
};

export const signup = (body, callback) => async dispatch => {
    
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
        callback();
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL,
            payload: err.response
        })
    }
};

export const verify = (body, callback) => async dispatch => {
    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/activation/`, body, config);
        dispatch({
            type: ACTIVATION_SUCCESS,
        });
        callback();
    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
};

export const reset_password = (body) => async dispatch => {
    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password/`, body, config);
        dispatch({
            type: PASSWORD_RESET_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_FAIL,
            payload: err.response
        });
    }
};

export const reset_password_confirm = (body, callback) => async dispatch => {
    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`, body, config);
        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS
        });
        callback();
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL,
        });
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};