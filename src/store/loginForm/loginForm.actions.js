import { SET_LOGIN_AND_PASSWORD } from './loginForm.constants';

export const setLoginAndPasswordAction = (login, password) => ({
    type: SET_LOGIN_AND_PASSWORD,
    login,
    password,
});
