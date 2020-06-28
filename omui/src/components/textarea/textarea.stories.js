import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { Textarea, Input } from '../..';

import {
  themeInputVariants,
  themeTextareaResize
} from '../../helpers/get-theme';

export default { title: 'Components/Textarea', decorators: [withKnobs] };

const { variant } = Input.defaultProps;

export const Default = () => (
  <Textarea
    placeholder={text('Placeholder', 'Start typing...')}
    isDisabled={boolean('Is disabled?', false)}
    isInvalid={boolean('Is invalid?', false)}
    variant={select('Variant', themeInputVariants, variant)}
    resize={select('Resize', themeTextareaResize, 'vertical')}
  />
);
