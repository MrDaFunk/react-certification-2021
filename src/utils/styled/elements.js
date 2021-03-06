import styled from 'styled-components';

import { transitionSlow } from '../constants/styles';

const A = styled.a`
  display: flex;
  text-decoration: none;
  color: ${({ theme: { color } }) => color};

  &:hover {
    color: ${({ theme: { hoverColor } }) => hoverColor};
  }
`;

const Input = styled.input`
  transition: ${transitionSlow};
  border-radius: 15px;
  height: 19px;
  border: solid 1px black;
  width: -webkit-fill-available;
  padding-left: 10px;

  &:focus {
    border: solid 1px ${({ theme: { accentColor } }) => accentColor};
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  padding: 0.3em 0.7em;
  border-radius: 15px;
  background-color: ${({ theme: { accentColor } }) => accentColor};
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { accentHoverColor } }) => accentHoverColor};
  }
`;

export { A, Input, Button };
