import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import {
  PALLETE,
  THEME,
} from '../../constants';

const light = {
  colors: {
    cardBgPrimary: PALLETE.WHITE,
    cardBgSecondary: PALLETE.GRAY_1,
    cardTitle: PALLETE.BLACK,
  },
};

const dark = {
  colors: {
    cardBgPrimary: PALLETE.BLACK_2,
    cardBgSecondary: PALLETE.BLACK_2,
    cardTitle: PALLETE.WHITE,
  },
};

const Theme = ({
  children,
  themeVariant,
}) => (
  <ThemeProvider
    theme={themeVariant === THEME.LIGHT ? light : dark}
  >
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node,
  themeVariant: PropTypes.string,
};

export default React.memo(Theme);
