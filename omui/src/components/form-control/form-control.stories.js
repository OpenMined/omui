import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { FormControl } from './';
import { Input } from '../../';

export default { title: 'Components/Form Control', decorators: [withKnobs] };

export const Default = () => (
  <FormControl
    id={text('ID', 'email')}
    label={text('Label', 'Email address')}
    helper={text('Helper text', 'Just type in an email!')}
    error={text('Error message', "This field isn't good")}
    isRequired={boolean('Is required?', true)}
    isInvalid={boolean('Is invalid?', false)}
    isDisabled={boolean('Is disabled?', false)}
    isReadOnly={boolean('Is read-only?', false)}
  >
    <Input type="email" />
  </FormControl>
);

Default.parameters = {
  knobs: {
    escapeHTML: false
  }
};
