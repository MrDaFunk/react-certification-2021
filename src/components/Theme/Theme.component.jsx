import React from 'react';
import { ThemeProvider } from 'styled-components';

import { light, dark } from '../../utils/constants/theme';

const Theme = ({ isDarkModeOn, children }) => <ThemeProvider theme={isDarkModeOn ? dark : light}>{children}</ThemeProvider>;

export default Theme;
