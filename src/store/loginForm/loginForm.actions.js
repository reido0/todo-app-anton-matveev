import {
    CHECK_LOGIN_AND_PASSWORD,
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
