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

const initialState = {
    access: localStorage.getItem('auth_token'),
    isAuthenticated: null,
    errorMessage: null,
    user: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGIN_SUCCESS:
        case GOOGLE_AUTH_SUCCESS:
            localStorage.setItem('auth_token', payload.auth_token);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.auth_token,
                errorMessage:null,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                errorMessage: null
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload,
                isAuthenticated: true
            }
        case USER_LOADED_SUCCESS_BY_ID:
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }
        case GOOGLE_AUTH_FAIL:
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem('auth_token');
            return {
                ...state,
                access: null,
                isAuthenticated: false,
                errorMessage: payload,
                user: null
            }
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return {
                ...state
            }
        case PASSWORD_RESET_FAIL:
            return {
              ...state,
                errorMessage: payload
            }
        default:
            return state
    }
};
