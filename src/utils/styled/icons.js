import styled from 'styled-components';

import { FaToggleOn, FaToggleOff, FaSearch, FaUserAlt, FaBars } from 'react-icons/fa';

const iconEffects = `
  cursor: pointer;
`;

const ToggleOff = styled(FaToggleOff)`
  ${iconEffects}
  color: ${({ theme: { color } }) => color};
`;

const ToggleOn = styled(FaToggleOn)`
  ${iconEffects}
  color: ${({ theme: { accentColor } }) => accentColor};
`;

const Search = styled(FaSearch)`
  ${iconEffects}
`;

const User = styled(FaUserAlt)`
  ${iconEffects}
`;

const Bars = styled(FaBars)`
  ${iconEffects}
`;

export { ToggleOff, ToggleOn, Search, User, Bars };
