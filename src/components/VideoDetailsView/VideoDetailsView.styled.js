import styled from 'styled-components';

import { sm, md } from '../../utils/constants/responsive-sizes';

const Suggestions = styled.div`
  width: 200px;
  margin-left: 2em;

  @media screen and (max-width: ${md}) {
    display: none;
  }
`;

const Container = styled.div`
  top: 0;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: -webkit-fill-available;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const RightSection = styled.div`
  overflow-y: auto;
  height: 450px;
`;

const Card = styled.div`
  padding: 4em;
  /* background-color: rgba(0, 0, 0, 0.9); */
  background-color: ${({ theme: { transparentModalBackgroundColor } }) =>
    transparentModalBackgroundColor};
  border-radius: 50px;
  max-width: min-content;
  display: flex;

  @media screen and (max-width: ${md}) {
    padding: 2em;
  }

  @media screen and (max-width: ${sm}) {
    padding: 1em;
  }
`;

const Video = styled.div`
  width: min-content;

  @media screen and (max-width: ${sm}) {
    padding: 0.5em;
  }
`;

const Player = styled.iframe`
  width: 600px;
  height: 300px;
  border: 0;

  @media screen and (max-width: ${md}) {
    width: 400px;
    height: 200px;
  }

  @media screen and (max-width: ${sm}) {
    width: 300px;
    height: 150px;
  }
`;

const Title = styled.p``;

const Description = styled.p`
  max-height: 140px;
  overflow-y: auto;
  margin-bottom: 0;

  @media screen and (max-width: ${sm}) {
    max-height: 100px;
  }
`;

const RightTitle = styled.p`
  margin-top: 0;
`;

export {
  Suggestions,
  Container,
  RightTitle,
  RightSection,
  Card,
  Video,
  Player,
  Title,
  Description,
};
