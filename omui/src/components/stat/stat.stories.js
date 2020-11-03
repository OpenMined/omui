import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Stat } from './';

export default { title: 'Components/Stat', decorators: [withKnobs] };

export const Default = () => (
  <Stat
    stats={[
      {
        label: text('Label 1', 'Revenue'),
        value: text('Value 1', '$190,000'),
        arrow: select('Arrow 1', ['increase', 'decrease', null], 'increase'),
        help: text('Help text 1', 'Looking good!')
      },
      {
        label: text('Label 2', 'Expense'),
        value: text('Value 2', '$150,000'),
        arrow: select('Arrow 2', ['increase', 'decrease', null], 'decrease'),
        help: text('Help text 2', 'Get those numbers down...')
      }
    ]}
  />
);
