import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Link } from '../../';

export default { title: 'Primitives/Link', decorators: [withKnobs] };

export const Default = () => (
  <Link href={text('Href', '#')}>
    {text('Text', 'I am just a simple link')}
  </Link>
);

export const External = () => (
  <Link href={text('Href', 'https://google.com')}>
    {text('Text', 'I am just an external link')}
  </Link>
);
