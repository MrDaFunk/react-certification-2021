import React from 'react';

import { Card, Header, Title, Subtitle } from './Video.styled';
import { safeHTML } from '../../utils/fns';

const Video = ({ src, title, description }) => {
  return (
    <Card image={src}>
      <Header>
        <Title dangerouslySetInnerHTML={safeHTML(title)} />
        <Subtitle dangerouslySetInnerHTML={safeHTML(description)} />
      </Header>
    </Card>
  );
};

export default Video;
