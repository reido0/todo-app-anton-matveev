import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

const getState = (state) => state;

export const getTheme = createSelector(
    [getState],
    get('theme'),
);

export const getThemeVariant = createSelector(
    [getTheme],
    get('themeVariant'),
);
