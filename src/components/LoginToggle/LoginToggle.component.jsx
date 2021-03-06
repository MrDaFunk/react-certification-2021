import React from 'react';

import { Text, UserIcon } from './LoginToggle.styled';

import { A } from '../../utils/styled/elements';

const LoginToggle = ({ toggleLogInModal }) => {
  // eslint-disable-next-line no-unused-vars
  const displayShowLogInModal = (event) => toggleLogInModal();

  return (
    <A href="#" onClick={displayShowLogInModal}>
      <UserIcon />
      <Text>Iniciar Sesion</Text>
    </A>
  );
};

export default LoginToggle;
