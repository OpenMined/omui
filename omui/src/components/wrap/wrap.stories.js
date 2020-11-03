import React from 'react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import {
  themeFlexAlignItems,
  themeFlexDirections,
  themeFlexJustifyContent
} from '../../theme/helpers';

import { Wrap, WrapItem } from './';

import { Center } from '../../';

export default { title: 'Components/Wrap', decorators: [withKnobs] };

export const Default = () => {
  const spacing = number('Spacing (px)', 30, { min: 1 });
  const flexDirection = select('Direction', themeFlexDirections, 'row');
  const alignItems = select('Align items', themeFlexAlignItems, 'center');
  const justifyContent = select(
    'Justify content',
    themeFlexJustifyContent,
    'space-evenly'
  );

  return (
    <Wrap
      spacing={`${spacing}px`}
      direction={flexDirection}
      align={alignItems}
      justify={justifyContent}
    >
      <WrapItem>
        <Center w="180px" h="80px" bg="red.200">
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="green.200">
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="tomato">
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="blue.200">
          Box 4
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="blackAlpha.500">
          Box 5
        </Center>
      </WrapItem>
    </Wrap>
  );
};
