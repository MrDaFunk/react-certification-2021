import React from 'react';

import { Container, ToggleOffIcon } from './DarkModeToggle.styled';

const DarkModeToggle = () => {
  // Later update the icon depends on the darkmode on/off state.
  const getIcon = () => <ToggleOffIcon />;

  return (
    <Container>
      {getIcon()}
      Dark Mode
    </Container>
  );
};

export default DarkModeToggle;
