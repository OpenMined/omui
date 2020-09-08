import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import { Alert } from './';
import { Alert as AlertStyles } from '../../theme';

const themeAlertStatuses = ['error', 'warning', 'success', 'info'];
const themeAlertVariants = Object.keys(AlertStyles.variants);

export default { title: 'Components/Alert', decorators: [withKnobs] };

const { status, variant, closable } = Alert.defaultProps;

export const Default = () => (
  <Alert
    title={text('Title', 'Oh no!')}
    status={select('Status', themeAlertStatuses, status)}
    variant={select('Variant', themeAlertVariants, variant)}
    closable={boolean('Closable?', closable)}
    onClose={() => console.log('Closed')}
  >
    {text('Description', 'Someone cannot handle the heat...')}
  </Alert>
);
