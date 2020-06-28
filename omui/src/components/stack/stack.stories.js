import React from 'react';
import { withKnobs, number, boolean, select } from '@storybook/addon-knobs';

import { Stack, Box } from '../..';
import { sizes } from '../../theme/foundations/sizes';

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
      direction={select(
        'Direction',
        ['row', 'column', 'row-reverse', 'column-reverse'],
        'row'
      )}
      spacing={select('Spacing', sizes, sizes['4'])}
    >
      {arrayOfBoxes.map((_, index) => (
        <Box width={200} p={2} bg="blue.400">
          Box {index + 1}
        </Box>
      ))}
    </Stack>
  );
};
