import {
  SET_THEME,
} from './theme.constants';
import { THEME } from '../../constants';

const initialState = {
  themeVariant: THEME.LIGHT,
};

export const theme = (
  state = initialState,
  action,
) => {
  switch (action.type) {
      case SET_THEME:
          return {
              ...state,
              themeVariant: action.payload,
          };
      default:
          return state;
  };
};
