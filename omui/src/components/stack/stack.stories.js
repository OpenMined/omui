import React from 'react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import { Stack } from './';
import { Box } from '../../';

import sizes from '../../theme/foundations/sizes';
import {
  themeFlexDirection,
  themeFlexAlignItems,
  themeFlexJustifyContent
} from '../../helpers/get-theme';

export default { title: 'Components/Stack', decorators: [withKnobs] };

export const Default = () => {
  const numBoxes = number('Number of boxes in each', 6, {
    min: 1,
    max: 20,
    step: 1
  });

  const arrayOfBoxes = [...Array(numBoxes).keys()];

  return (
    <Stack
      direction={select('Direction', themeFlexDirection, 'row')}
      align={select('Align items', themeFlexAlignItems, 'center')}
      justify={select(
        'Justify content',
        themeFlexJustifyContent,
        'space-evenly'
      )}
      spacing={select('Spacing', sizes, sizes['4'])}
    >
      {arrayOfBoxes.map((_, index) => (
        <Box key={index} width={200} p={2} bg="blue.400">
          Box {index + 1}
        </Box>
      ))}
    </Stack>
  );
};
