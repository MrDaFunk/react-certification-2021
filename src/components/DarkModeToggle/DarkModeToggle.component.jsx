import React from 'react';

import { Container, ToggleOffIcon, ToggleOnIcon } from './DarkModeToggle.styled';

const DarkModeToggle = ({ isDarkModeOn, toggleDarkMode }) => {
  const darkModeHandler = (event) => toggleDarkMode();

  const getIcon = () => isDarkModeOn ? <ToggleOnIcon onClick={darkModeHandler} /> : <ToggleOffIcon onClick={darkModeHandler} />;

  return (
    <Container>
      {getIcon()}
      Dark Mode
    </Container>
  );
};

export default DarkModeToggle;
