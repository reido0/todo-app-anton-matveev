import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

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
