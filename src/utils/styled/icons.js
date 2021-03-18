import styled from 'styled-components';

import {
  FaToggleOn,
  FaToggleOff,
  FaSearch,
  FaUserAlt,
  FaKey,
  FaBars,
  FaSpinner,
  FaStar,
} from 'react-icons/fa';

const iconEffects = `
  cursor: pointer;
`;

const accentEffect = ({ theme: { accentColor } }) => accentColor;

const ToggleOff = styled(FaToggleOff)`
  ${iconEffects}
  color: ${accentEffect};
`;

const ToggleOn = styled(FaToggleOn)`
  ${iconEffects}
  color: ${accentEffect};
`;

const Search = styled(FaSearch)``;

const User = styled(FaUserAlt)`
  ${iconEffects}
`;

const Key = styled(FaKey)`
  ${iconEffects}
`;

const Bars = styled(FaBars)`
  ${iconEffects}
`;

const Spinner = styled(FaSpinner)`
  ${iconEffects}
  color: ${accentEffect};
  animation: spin infinite 1s linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const StarIcon = styled(FaStar)`
  ${iconEffects}
`;

export { ToggleOff, ToggleOn, Search, User, Key, Bars, Spinner, StarIcon };
