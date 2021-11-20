import {
    ADD_NEW_USER_DATA,
    CHECK_LOGIN_AND_PASSWORD,
    LOGOUT_USER,
    REGISTER_NEW_USER,
    SET_IS_USER_LOGGED,
    SET_USER_ID,
} from './loginForm.constants';

export const checkLoginAndPasswordAction = (payload) => ({
    type: CHECK_LOGIN_AND_PASSWORD,
    payload,
});

export const setIsUserLoggedAction = (payload) => ({
    type: SET_IS_USER_LOGGED,
    payload,
});

export const setUserIdAction = (payload) => ({
    type: SET_USER_ID,
    payload,
});

export const logoutAction = () => ({
    type: LOGOUT_USER,
});

export const registerNewUserAction = (payload) => ({
    type: REGISTER_NEW_USER,
    payload,
});

export const addNewUserDataAction = (payload) => ({
    type: ADD_NEW_USER_DATA,
    payload,
});
