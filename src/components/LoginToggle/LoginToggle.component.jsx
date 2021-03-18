import React from 'react';

import { Text, UserIcon } from './LoginToggle.styled';

import { A } from '../../utils/styled/elements';

import { useDispatch } from '../Store';

const LoginToggle = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const displayShowLogInModal = (event) =>
    dispatch({ type: 'toggleShowLogInModal', payload: true });

  return (
    <A href="#" onClick={displayShowLogInModal}>
      <UserIcon />
      <Text>Iniciar Sesion</Text>
    </A>
  );
};

export default LoginToggle;
