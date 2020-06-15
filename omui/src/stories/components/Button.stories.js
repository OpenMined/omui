import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Button, IconButton } from '../../';
import {
  themeIconButtonSizes,
  themeButtonSizes,
  themeButtonColors,
  themeButtonVariants
} from '../../helpers/get-theme';

export default { title: 'Primitives/Button', decorators: [withKnobs] };

const {
  size,
  variant,
  variantColor,
  leftIcon,
  rightIcon
} = Button.defaultProps;

export const Default = () => {
  const isLoading = boolean('Is loading?', false);
  const loadingText = isLoading ? text('Loading text', 'Submitting...') : null;

  return (
    <Button
      size={select('Size', themeButtonSizes, size)}
      variant={select('Variant', themeButtonVariants, variant)}
      variantColor={select('Color', themeButtonColors, variantColor)}
      leftIcon={text('Left icon', leftIcon)}
      rightIcon={text('Right icon', rightIcon)}
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
    variantColor={select('Color', themeButtonColors, variantColor)}
    icon={text('Icon', 'phone')}
    isRound={boolean('Is round?', IconButton.defaultProps.isRound)}
    isDisabled={boolean('Is disabled?', false)}
    isLoading={boolean('Is loading?', false)}
  />
);
