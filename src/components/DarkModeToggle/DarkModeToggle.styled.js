import styled from 'styled-components';

import { sm } from '../../utils/constants/responsive-sizes';

import { AlignMiddle } from '../../utils/styled/helpers';
import { ToggleOff, ToggleOn } from '../../utils/styled/icons';

const iconEffects = `
  margin-right: 0.2em;
`;

const Container = styled(AlignMiddle)`
  cursor: pointer;

  @media screen and (max-width: ${sm}) {
    display: none;
  }

  &:hover {
    color: ${({ theme: { hoverColor } }) => hoverColor};
  }
`;

const ToggleOffIcon = styled(ToggleOff)`
  ${iconEffects}
`;

const ToggleOnIcon = styled(ToggleOn)`
  ${iconEffects}
`;

export { Container, ToggleOffIcon, ToggleOnIcon };
