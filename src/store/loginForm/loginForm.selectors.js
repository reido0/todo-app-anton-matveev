import { createSelector } from 'reselect';
import get from 'lodash/fp/get';
import { MOCKED_USERS } from '../../constants';

const getState = (state) => state;

export const getLoginForm = createSelector(
    [getState],
    get('loginForm'),
);

export const getIsUserLogged = createSelector(
    [getLoginForm],
    get('isUserLogged'),
);

export const getUserId = createSelector(
    [getLoginForm],
    get('userId'),
);

export const getUsers = createSelector(
    [getLoginForm],
    get('users'),
);

export const getCurrentUserData = createSelector(
    [getUserId],
    (userId) => MOCKED_USERS.find((user) => user.id === userId),
);
