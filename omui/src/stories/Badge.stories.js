import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Badge, Flex, Avatar, Box, Text } from '../';
import { themeBadgeVariants, themeBadgeColors } from '../helpers/get-theme';

export default { title: 'Badge', decorators: [withKnobs] };

const { variant, variantColor } = Badge.defaultProps;

export const Default = () => (
  <Badge
    variant={select('Variant', themeBadgeVariants, variant)}
    variantColor={select('Color', themeBadgeColors, variantColor)}
  >
    {text('Text', 'I am a badge')}
  </Badge>
);

export const WithAvatar = () => (
  <Flex>
    <Avatar src="https://bit.ly/sage-adebayo" />
    <Box ml="3">
      <Flex alignItems="center">
        <Text fontWeight="bold">Segun Adebayo</Text>
        <Badge
          ml="2"
          variant={select('Variant', themeBadgeVariants, variant)}
          variantColor={select('Color', themeBadgeColors, 'green')}
        >
          New
        </Badge>
      </Flex>
      <Text fontSize="sm">UI Engineer</Text>
    </Box>
  </Flex>
);
