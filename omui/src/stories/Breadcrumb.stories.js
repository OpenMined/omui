import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Breadcrumb } from '../';

export default { title: 'Breadcrumb', decorators: [withKnobs] };

export const Default = () => {
  const links = [
    {
      href: '#',
      title: 'Home'
    },
    {
      href: '#',
      title: 'Blog'
    },
    {
      href: '#',
      title: 'The current state of the blog'
    }
  ];
  return <Breadcrumb links={links} />;
};
