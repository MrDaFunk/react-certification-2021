import React from 'react';
import { ThemeProvider } from 'styled-components';

import { light, dark } from '../../utils/constants/theme';

import { useState } from '../State';

const Theme = ({ children }) => {
  const { isDarkmodeOn } = useState();
  return <ThemeProvider theme={isDarkmodeOn ? dark : light}>{children}</ThemeProvider>;
};

export default Theme;
