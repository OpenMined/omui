import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import { Alert } from '../';
import { themeAlertStatuses, themeAlertVariants } from '../helpers/get-theme';

export default { title: 'Alert', decorators: [withKnobs] };

const { status, variant, closable } = Alert.defaultProps;

export const Default = () => (
  <Alert
    title={text('Title', 'Oh no!')}
    status={select('Status', themeAlertStatuses, status)}
    variant={select('Variant', themeAlertVariants, variant)}
    closable={boolean('Closable?', closable)}
  >
    {text('Description', 'Someone cannot handle the heat...')}
  </Alert>
);
