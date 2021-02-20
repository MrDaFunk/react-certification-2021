import React from 'react';

import { UserIcon } from './LoginToggle.styled';

import { A } from '../../utils/styled/elements';

const LoginToggle = () => {
  return (
    <A href="#">
      <UserIcon />
      Iniciar Sesion
    </A>
  );
};

export default LoginToggle;
