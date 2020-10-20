import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { Textarea } from './';
import { Textarea as TextareaStyle } from '../../theme';

export default { title: 'Components/Textarea', decorators: [withKnobs] };

const { variant } = TextareaStyle.defaultProps;
const themeTextareaResize = ['none', 'vertical', 'horizontal', 'both'];
const themeTextareaVariants = Object.keys(TextareaStyle.variants);

export const Default = () => (
  <Textarea
    placeholder={text('Placeholder', 'Start typing...')}
    isDisabled={boolean('Is disabled?', false)}
    isInvalid={boolean('Is invalid?', false)}
    variant={select('Variant', themeTextareaVariants, variant)}
    resize={select('Resize', themeTextareaResize, 'vertical')}
  />
);
