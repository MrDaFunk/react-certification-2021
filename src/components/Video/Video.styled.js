import styled from 'styled-components';

import { sm, md, lg } from '../../utils/constants/responsive-sizes';
import { transitionSlow } from '../../utils/constants/styles';

const Card = styled.div`
  transition: ${transitionSlow};
  color: ${({ theme: { color } }) => color};
  display: flex;
  width: 25%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%);
  height: 250px;
  cursor: pointer;
  position: relative;

  &:hover {
    filter: none;
  }

  @media screen and (max-width: ${lg}) {
    width: 33.33%;
  }

  @media screen and (max-width: ${md}) {
    width: 50%;
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

const Subtitle = styled.p`
  font-size: 12px;
  color: ${({ theme: { grayColor } }) => grayColor};
`;

export { Card, Header, Title, Subtitle };
