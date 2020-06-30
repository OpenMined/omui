import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Tag, TagStyle } from './';
import { Avatar } from '../../';

import {
  themeTagSizes,
  themeTagVariants,
  themeTagColors
} from '../../helpers/get-theme';
import { CheckIcon } from '@chakra-ui/icons';

export default { title: 'Components/Tag', decorators: [withKnobs] };

const { size, variant, colorScheme } = TagStyle.defaultProps;

export const Default = () => {
  const leftElement = boolean('Has left element', false);
  const rightElement = boolean('Has right element', false);

  return (
    <Tag
      label={text('Text', 'Sample text')}
      size={select('Size', themeTagSizes, size)}
      variant={select('Variant', themeTagVariants, variant)}
      colorScheme={select('Color', themeTagColors, colorScheme)}
      leftElement={
        leftElement ? (
          <Avatar
            src="https://bit.ly/sage-adebayo"
            size="xs"
            name="Segun Adebayo"
            borderRadius="md"
            ml={-2}
            mr={2}
          />
        ) : null
      }
      rightElement={
        rightElement ? <CheckIcon ml={2} color="green.500" /> : null
      }
      onClose={() => console.log('Closed')}
      closable={boolean('Is closable?', true)}
    />
  );
};
