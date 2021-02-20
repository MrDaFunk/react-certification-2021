import styled from 'styled-components';

import { transitionSlow } from '../constants/styles';

const A = styled.a`
  display: flex;
  text-decoration: none;
  color: ${({ theme: { color } }) => color};
`;

const Input = styled.input`
  transition: ${transitionSlow};
  border-radius: 15px;
  height: 19px;
  border: solid 1px black;
  width: -webkit-fill-available;

  &:focus {
    border: solid 1px ${({ theme: { accentColor } }) => accentColor};
    outline: none;
  }
`;

export { A, Input };
