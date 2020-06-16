import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Divider, Flex, Box } from '../../';

import { themeAllPossibleColors } from '../../helpers/get-theme';

export default { title: 'Components/Divider', decorators: [withKnobs] };

export const Default = () => {
  const orientation = select(
    'Orientation',
    ['vertical', 'horizontal'],
    'horizontal'
  );
  return (
    <Flex direction={orientation === 'horizontal' ? 'column' : 'row'}>
      <Box>Hello</Box>
      <Divider
        orientation={orientation}
        borderColor={select(
          'Color',
          themeAllPossibleColors,
          Divider.defaultProps.borderColor
        )}
      />
      <Box>World</Box>
    </Flex>
  );
};
