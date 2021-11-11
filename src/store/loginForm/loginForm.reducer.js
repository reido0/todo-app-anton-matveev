import {
    SET_IS_USER_LOGGED,
    SET_USER_ID,
} from './loginForm.constants';

const initialState = {
    isUserLogged: false,
    userId: '',
};

export const loginForm = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case SET_IS_USER_LOGGED:
            return {
                ...state,
                isUserLogged: action.payload,
            };
        case SET_USER_ID:
            return {
                ...state,
                userId: action.payload,
            };
        default:
            return state;
    };
};
