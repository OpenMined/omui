import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Breadcrumb } from '../..';

export default { title: 'Components/Breadcrumb', decorators: [withKnobs] };

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
