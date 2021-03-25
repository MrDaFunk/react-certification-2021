import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Text, UserIcon } from './LoginToggle.styled';

import { A } from '../../utils/styled/elements';

import { useState, useDispatch } from '../State';

const LoginToggle = () => {
  const { hasAuth } = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const displayShowLogInModal = (event) => {
    history.push({ pathname: '/login', state: { background: location } });
    dispatch({ type: 'toggleShowLogInModal', payload: true });
  };

  if (hasAuth) {
    return null;
  }

  return (
    <A href="#" onClick={displayShowLogInModal}>
      <UserIcon />
      <Text>Iniciar Sesion</Text>
    </A>
  );
};

export default LoginToggle;
