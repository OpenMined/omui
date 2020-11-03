import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { PhoneIcon, CalendarIcon } from '@chakra-ui/icons';

import { Button, IconButton, ButtonGroup } from './';
import { Button as ButtonStyle } from '../../theme';
import { themeBaseColors } from '../../theme/helpers';

export default { title: 'Primitives/Button', decorators: [withKnobs] };

const { size, variant, colorScheme } = ButtonStyle.defaultProps;

// Icon Button
const themeIconButtonSizes = ['sm', 'md', 'lg'];

// Button
const themeButtonSizes = Object.keys(ButtonStyle.sizes);
const themeButtonVariants = Object.keys(ButtonStyle.variants);

export const Default = () => {
  const isLoading = boolean('Is loading?', false);
  const loadingText = isLoading ? text('Loading text', 'Submitting...') : null;
  const leftIcon = boolean('Left icon?', false);
  const rightIcon = boolean('Right icon?', false);

  return (
    <Button
      size={select('Size', themeButtonSizes, size)}
      variant={select('Variant', themeButtonVariants, variant)}
      colorScheme={select('Color', themeBaseColors, colorScheme)}
      leftIcon={leftIcon ? <PhoneIcon /> : null}
      rightIcon={rightIcon ? <CalendarIcon /> : null}
      isDisabled={boolean('Is disabled?', false)}
      isLoading={isLoading}
      loadingText={loadingText}
    >
      {text('Text', 'Customize me with knobs!')}
    </Button>
  );
};

export const Icon = () => (
  <IconButton
    size={select('Size', themeIconButtonSizes, size)}
    variant={select('Variant', themeButtonVariants, variant)}
    colorScheme={select('Color', themeBaseColors, colorScheme)}
    icon={<PhoneIcon />}
    isRound={boolean('Is round?', IconButton.defaultProps.isRound)}
    isDisabled={boolean('Is disabled?', false)}
    isLoading={boolean('Is loading?', false)}
  />
);

export const WithGroup = () => {
  return (
    <ButtonGroup variant="outline" spacing="6">
      <Button colorScheme="blue">Save</Button>
      <Button>Cancel</Button>
    </ButtonGroup>
  );
};
