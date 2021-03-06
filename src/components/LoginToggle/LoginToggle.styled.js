import styled from 'styled-components';

import { sm } from '../../utils/constants/responsive-sizes';

import { User } from '../../utils/styled/icons';

const UserIcon = styled(User)`
  margin-right: 0.2em;
`;

const Text = styled.span`
  @media screen and (max-width: ${sm}) {
    display: none;
  }
`;

export { UserIcon, Text };
