import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Divider } from './';
import { Flex, Box } from '../../';

import { filteredColors } from '../../theme/helpers';

export default { title: 'Components/Divider', decorators: [withKnobs] };

export const Default = () => (
  <Flex direction="column">
    <Box>Hello</Box>
    <Divider
      borderWidth={select('Thickness', {
        Thin: '1px',
        Medium: '2px',
        Thick: '4px'
      })}
      borderColor={select(
        'Color',
        filteredColors([100, 400, 700, 'black', 'white']),
        Divider.defaultProps.borderColor
      )}
    />
    <Box>World</Box>
  </Flex>
);
