import styled from 'styled-components';

import { sm, md, lg } from '../../utils/constants/responsive-sizes';
import { transitionSlow } from '../../utils/constants/styles';

const Card = styled.div`
  transition: ${transitionSlow};
  color: ${({ theme: { color } }) => color};
  display: flex;
  width: ${({ isInModal }) => (isInModal ? '100%' : '25%')};
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  height: ${({ isInModal }) => (isInModal ? '150px' : '250px')};
  cursor: pointer;
  position: relative;

  &:hover {
    filter: none;
  }

  @media screen and (max-width: ${lg}) {
    width: ${({ isInModal }) => (isInModal ? '100%' : '33.33%')};
  }

  @media screen and (max-width: ${md}) {
    width: ${({ isInModal }) => (isInModal ? '100%' : '50%')};
    filter: none;
  }

  @media screen and (max-width: ${sm}) {
    width: 100%;
  }
`;

const Header = styled.div`
  background-color: ${({ theme: { transparentBackgroundColor } }) =>
    transparentBackgroundColor};
  height: fit-content;
  bottom: 0;
  position: absolute;
  padding: 0 0.5em;
  width: -webkit-fill-available;
`;

const Title = styled.h4`
  margin-bottom: 0;
`;

const Description = styled.p`
  font-size: 12px;
  color: ${({ theme: { grayColor } }) => grayColor};
  text-overflow: ${({ isInModal }) => (isInModal ? 'ellipsis' : 'unset')};
  height: ${({ isInModal }) => (isInModal ? '20px' : 'auto')};
  overflow: ${({ isInModal }) => (isInModal ? 'hidden' : 'unset')};
  white-space: ${({ isInModal }) => (isInModal ? 'nowrap' : 'unset')};
`;

export { Card, Header, Title, Description };
