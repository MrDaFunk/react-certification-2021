import React from 'react';

import { Container, ToggleOffIcon, ToggleOnIcon } from './DarkModeToggle.styled';

const DarkModeToggle = ({ isDarkModeOn, toggleDarkMode }) => {
  // eslint-disable-next-line no-unused-vars
  const darkModeHandler = (event) => toggleDarkMode();

  const getIcon = () => (isDarkModeOn ? <ToggleOnIcon /> : <ToggleOffIcon />);

  return (
    <Container onClick={darkModeHandler}>
      {getIcon()}
      Dark Mode
    </Container>
  );
};

export default DarkModeToggle;
