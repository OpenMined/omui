import React from 'react';
import {
  withKnobs,
  text,
  boolean,
  select,
  number
} from '@storybook/addon-knobs';

import { useToast } from './';
import { Button } from '../../';

export default { title: 'Components/Toast', decorators: [withKnobs] };

const themeToastStatuses = [];
const themeToastPositions = [
  'top',
  'top-left',
  'top-right',
  'bottom',
  'bottom-left',
  'bottom-right'
];

export const Default = () => {
  const toast = useToast();

  const title = text('Title', "Here's my title");
  const description = text(
    'Description',
    "We've created your account for you."
  );

  const status = select('Status', themeToastStatuses, 'success');

  const duration = number('Duration', 5000, {
    min: 1000,
    max: 10000,
    step: 500
  });
  const position = select('Position', themeToastPositions, 'bottom');
  const isClosable = boolean('Is closable?', true);

  return (
    <Button
      onClick={() =>
        toast({
          title,
          description,
          status,
          duration,
          position,
          isClosable
        })
      }
    >
      Show Toast
    </Button>
  );
};

Default.parameters = {
  knobs: {
    escapeHTML: false
  }
};
