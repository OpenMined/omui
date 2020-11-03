import React from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import { Container, Box } from '../..';
export default { title: 'Primitives/Container', decorators: [withKnobs] };

export const Default = () => {
  return (
    <Container maxW="xl" centerContent={boolean('Center content', false)}>
      <Box padding="4" bg="gray.100" maxW="3xl">
        {text(
          'Text',
          'There are many benefits to a joint design and development system. Not only does it bring benefits to the design team.'
        )}
      </Box>
    </Container>
  );
};
