import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import { AlertBox } from './';
import { Alert as AlertStyles } from '../../theme';

const themeAlertStatuses = ['error', 'warning', 'success', 'info'];
const themeAlertVariants = Object.keys(AlertStyles.variants);

export default { title: 'Components/Alert Box', decorators: [withKnobs] };

const { status, variant } = AlertBox.defaultProps;

export const Default = () => (
  <AlertBox
    title={text('Title', 'Account Created')}
    status={select('Status', themeAlertStatuses, status)}
    variant={select('Variant', themeAlertVariants, variant)}
  >
    {text(
      'Description',
      'Very nice! The sun is shining and it will be a great day in San Diego.'
    )}
  </AlertBox>
);
