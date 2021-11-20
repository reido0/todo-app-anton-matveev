import {
    ADD_NEW_USER_DATA,
    LOGOUT_USER,
    SET_IS_USER_LOGGED,
    SET_USER_ID,
} from './loginForm.constants';
import { MOCKED_USERS } from '../../constants';

const initialState = {
    isUserLogged: false,
    userId: '',
    users: MOCKED_USERS,
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
        case LOGOUT_USER:
            return {
                ...state,
                isUserLogged: false,
                userId: '',
            }
        case ADD_NEW_USER_DATA:
            const currentUsers = state.users;

            currentUsers.push({
                ...action.payload,
            });
            return {
                ...state,
                users: [...currentUsers],
            }
        default:
            return state;
    };
};
