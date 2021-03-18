import styled from 'styled-components';

import { sm } from '../../utils/constants/responsive-sizes';
import { StarIcon } from '../../utils/styled/icons';

import { AlignMiddle } from '../../utils/styled/helpers';

const FavoriteIcon = styled(StarIcon)`
  color: 'yellow';
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

export { Container, FavoriteIcon };
