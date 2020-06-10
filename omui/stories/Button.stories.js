import React from 'react';
import { Button } from '../components/Button';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import {
  themeButtonColors,
  themeSizes,
  themeButtonVariants,
} from '../helpers/get-theme';

export default { title: 'Button', decorators: [withKnobs] };

const {
  size,
  variant,
  variantColor,
  leftIcon,
  rightIcon,
} = Button.defaultProps;

export const Default = () => {
  const isLoading = boolean('Is loading?', false);
  const loadingText = isLoading ? text('Loading text', 'Submitting...') : null;

  return (
    <Button
      size={select('Size', themeSizes, size)}
      variant={select('Variant', themeButtonVariants, variant)}
      variantColor={select('Color', themeButtonColors, variantColor)}
      leftIcon={text('Left icon', leftIcon)}
      rightIcon={text('Right icon', rightIcon)}
      isLoading={isLoading}
      loadingText={loadingText}
    >
      {text('Text', 'Customize me with knobs!')}
    </Button>
  );
};
