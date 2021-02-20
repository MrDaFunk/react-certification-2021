import React from 'react';
import { ThemeProvider } from 'styled-components';

import { dark } from '../../utils/constants/theme';

const Theme = ({ children }) => <ThemeProvider theme={dark}>{children}</ThemeProvider>;

export default Theme;
