import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Editable, Flex, Avatar, Box, Heading } from '../..';

export default { title: 'Components/Editable', decorators: [withKnobs] };

export const Default = () => {
  const isEditable = boolean('Is editable?', true);

  return (
    <Flex alignItems="center">
      <Avatar size="lg" src="https://bit.ly/sage-adebayo" />
      <Box ml={4}>
        <Heading size="lg" mb={1}>
          <Editable defaultValue="Sage Adebayo" isDisabled={!isEditable} />
        </Heading>
        <Editable
          placeholder="Write your description here..."
          isDisabled={!isEditable}
        />
      </Box>
    </Flex>
  );
};
