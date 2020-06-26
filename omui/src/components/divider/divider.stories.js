import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Divider, Flex, Box } from '../..';

import { themeAllPossibleColors } from '../../helpers/get-theme';

export default { title: 'Components/Divider', decorators: [withKnobs] };

export const Default = () => (
  <Flex direction="column">
    <Box>Hello</Box>
    <Divider
      borderColor={select(
        'Color',
        themeAllPossibleColors,
        Divider.defaultProps.borderColor
      )}
    />
    <Box>World</Box>
  </Flex>
);
