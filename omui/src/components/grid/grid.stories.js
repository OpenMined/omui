import React from 'react';
import {
  withKnobs,
  text,
  number,
  select,
  boolean
} from '@storybook/addon-knobs';

import { Grid, SimpleGrid, Box, Text } from '../..';
import { sizes } from '../../theme/foundations/sizes';

export default { title: 'Primitives/Grid', decorators: [withKnobs] };

export const Default = () => {
  const numBoxes = number('Number of boxes in each', 6, {
    min: 1,
    max: 20,
    step: 1
  });

  const arrayOfBoxes = [...Array(numBoxes).keys()];

  return (
    <>
      <Grid
        templateColumns={text('Template columns', 'repeat(5, 1fr)')}
        rowGap={select('Row gap', sizes, sizes['4'])}
        columnGap={select('Column gap', sizes, sizes['4'])}
      >
        {arrayOfBoxes.map((_, index) => (
          <Box width="100%" p={2} bg="blue.400">
            Box {index + 1}
          </Box>
        ))}
      </Grid>
      <Text mt={4}>
        You can use any CSS grid property, but we'll only demonstrate a few
        here...
      </Text>
    </>
  );
};

export const SimpleGridExample = () => {
  const numBoxes = number('Number of boxes in each', 6, {
    min: 1,
    max: 20,
    step: 1
  });

  const arrayOfBoxes = [...Array(numBoxes).keys()];

  const hasMinChildWidth = boolean('Has minimum child width', false);
  const minChildWidth = hasMinChildWidth
    ? number('Min child width', 100, {
        min: 0,
        max: 1000,
        step: 10
      })
    : null;

  return (
    <SimpleGrid
      columns={number('Columns', 3, { min: 1, max: 5, step: 1 })}
      spacingX={select('Spacing X', sizes, sizes['4'])}
      spacingY={select('Spacing Y', sizes, sizes['4'])}
      minChildWidth={minChildWidth}
    >
      {arrayOfBoxes.map((_, index) => (
        <Box width="100%" p={2} bg="blue.400">
          Box {index + 1}
        </Box>
      ))}
    </SimpleGrid>
  );
};
