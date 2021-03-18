import styled from 'styled-components';

import { StarIcon } from '../../utils/styled/icons';

const FavoriteIcon = styled(StarIcon)`
  color: ${({ hover = false, active = false }) => {
    if (active) {
      return 'yellow';
    }
    return hover ? 'white' : 'transparent';
  }};
  display: ${({ hover }) => (hover ? 'inline' : 'none')};
  z-index: 1;
  position: absolute;
  top: 0;
  padding: 0.5em;
  filter: drop-shadow(2px 4px 6px black);
`;

export { FavoriteIcon };
