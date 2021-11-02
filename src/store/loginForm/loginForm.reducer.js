import { SET_LOGIN_AND_PASSWORD } from './loginForm.constants';

const initialState = {
    login: '',
    password: '',
};

export const loginFormReducer = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case SET_LOGIN_AND_PASSWORD:
            return {
                ...state,
                login: action.login,
                password: action.password,
            };
        default:
            return state;
    };
};
