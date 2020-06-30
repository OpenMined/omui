import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { KeyboardKey } from './';
import { Text } from '../../';

export default { title: 'Components/Keyboard Key', decorators: [withKnobs] };

export const Default = () => (
  <Text>
    Press the <KeyboardKey>shift</KeyboardKey> or{' '}
    <KeyboardKey>⌘/Ctrl</KeyboardKey> key at any moment
  </Text>
);
