import React from 'react';
import { Button } from '../components/Button';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import {
  themeColors,
  themeSizes,
  themeButtonVariants,
} from '../helpers/get-theme';

export default { title: 'Button', decorators: [withKnobs] };

export const Default = () => {
  const isLoading = boolean('Is loading?', false);
  const loadingText = isLoading ? text('Loading text', 'Submitting...') : null;

  return (
    <Button
      size={select('Size', themeSizes, 'md')}
      variant={select('Variant', themeButtonVariants, 'solid')}
      variantColor={select('Color', themeColors, 'red')}
      leftIcon={text('Left icon', '')}
      rightIcon={text('Right icon', 'chevron-right')}
      isLoading={isLoading}
      loadingText={loadingText}
    >
      {text('Text', 'Customize me with knobs!')}
    </Button>
  );
};
