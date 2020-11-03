import React from 'react';
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs';

import {
  Stack,
  VStack as OMVStack,
  HStack as OMHStack,
  StackDivider
} from './';
import { Box } from '../../';

import sizes from '../../theme/foundations/sizes';

import {
  themeFlexDirections,
  themeFlexJustifyContent,
  themeFlexAlignItems
} from '../../theme/helpers';

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
      direction={select('Direction', themeFlexDirections, 'row')}
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

export const HStack = () => {
  const numBoxes = number('Number of boxes in each', 6, {
    min: 1,
    max: 20,
    step: 1
  });

  const hasDivider = boolean('Divider', false);

  const arrayOfBoxes = [...Array(numBoxes).keys()];

  return (
    <OMHStack
      spacing={4}
      divider={hasDivider && <StackDivider borderColor="gray.200" />}
    >
      {arrayOfBoxes.map((_, index) => (
        <Box key={index} width={200} p={2} bg="blue.400">
          Box {index + 1}
        </Box>
      ))}
    </OMHStack>
  );
};

export const VStack = () => {
  const numBoxes = number('Number of boxes in each', 6, {
    min: 1,
    max: 20,
    step: 1
  });

  const hasDivider = boolean('Divider', false);

  const arrayOfBoxes = [...Array(numBoxes).keys()];

  return (
    <OMVStack
      spacing={4}
      align="stretch"
      divider={hasDivider && <StackDivider borderColor="gray.200" />}
    >
      {arrayOfBoxes.map((_, index) => (
        <Box key={index} h="40px" p={2} bg="blue.400">
          Box {index + 1}
        </Box>
      ))}
    </OMVStack>
  );
};
