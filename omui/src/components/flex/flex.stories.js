import React from 'react';
import { withKnobs, number, boolean, select } from '@storybook/addon-knobs';

import { Flex } from './';
import { Box } from '../../';
import {
  themeFlexAlignItems,
  themeFlexDirections,
  themeFlexJustifyContent
} from '../../theme/helpers';

export default { title: 'Primitives/Flex', decorators: [withKnobs] };

export const Default = () => {
  const numBoxes = number('Number of boxes in each', 6, {
    min: 1,
    max: 20,
    step: 1
  });
  const flexDirection = select('Direction', themeFlexDirection, 'row');
  const alignItems = select('Align items', themeFlexAlignItems, 'center');
  const justifyContent = select(
    'Justify content',
    themeFlexJustifyContent,
    'space-evenly'
  );
  const shouldWrap = boolean('Should wrap?', true);

  const arrayOfBoxes = [...Array(numBoxes).keys()];

  return (
    <Flex
      bg="blue.100"
      p={4}
      height={400}
      direction={flexDirection}
      wrap={shouldWrap ? 'wrap' : 'nowrap'}
      align={alignItems}
      justify={justifyContent}
    >
      {arrayOfBoxes.map((_, index) => (
        <Box key={index} width={200} p={4} m={4} bg="blue.400">
          Box {index + 1}
        </Box>
      ))}
    </Flex>
  );
};

export const GridOfBoxes = () => {
  const direction = select('Main flex direction', ['column', 'row'], 'column');
  const numBoxes = number('Number of boxes in each', 4, {
    min: 1,
    max: 5,
    step: 1
  });
  const numColumnRows = 2;

  const arrayOfBoxes = [...Array(numBoxes).keys()];
  const arrayOfColumnRows = [...Array(numColumnRows).keys()];

  return (
    <Flex bg="blue.100" p={4} direction={direction}>
      {arrayOfColumnRows.map(() => (
        <Flex bg="blue.200" width="100%">
          {arrayOfBoxes.map((_, index) => (
            <Box
              key={index}
              width={`${100 / arrayOfBoxes.length}%`}
              p={4}
              m={4}
              bg="blue.400"
            >
              Box {index + 1}
            </Box>
          ))}
        </Flex>
      ))}
    </Flex>
  );
};
