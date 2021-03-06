import styled from 'styled-components';

import { User, Key } from '../../utils/styled/icons';
import { Button } from '../../utils/styled/elements';

const UserIcon = styled(User)`
  margin-right: 0.5em;
`;

const KeyIcon = styled(Key)`
  margin-right: 0.5em;
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

const Card = styled.div`
  padding: 2em 1em;
  width: 300px;
  background-color: ${({ theme: { transparentModalBackgroundColor } }) =>
    transparentModalBackgroundColor};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin-top: 0;
  text-align: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  margin-bottom: 0;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  text-align: center;
  margin-top: 1em;
`;

export { Container, Card, Title, Body, Block, UserIcon, KeyIcon, SubmitButton };
