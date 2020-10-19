import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';

import { Breadcrumb } from './';

export default { title: 'Components/Breadcrumb', decorators: [withKnobs] };

const BreadcrumbFontSizes = ['sm', 'md', 'lg'];

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
  return (
    <Breadcrumb
      fontSize={select('Font size', BreadcrumbFontSizes)}
      links={links}
    />
  );
};
