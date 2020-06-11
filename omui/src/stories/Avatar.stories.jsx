import React from 'react';
import { withKnobs, select, text, number } from '@storybook/addon-knobs';

import { Avatar, AvatarGroup } from '../';
import { themeAvatarSizes, themeBadgeColors } from '../helpers/get-theme';

export default { title: 'Avatar', decorators: [withKnobs] };

export const Default = () => (
  <Avatar
    src={text('Source', 'https://bit.ly/sage-adebayo')}
    size={select('Size', themeAvatarSizes, Avatar.defaultProps.size)}
    badge={select('Badge color', ['', ...themeBadgeColors])}
    name={text('Name', 'That guy')}
  />
);

export const Group = () => {
  const badge = select('Badge color', ['', ...themeBadgeColors]);

  const avatars = [
    {
      name: 'Ryan Florence',
      src: 'https://bit.ly/ryan-florence'
    },
    {
      name: 'Segun Adebayo',
      src: 'https://bit.ly/sage-adebayo'
    },
    {
      name: 'Kent Dodds',
      src: 'https://bit.ly/kent-c-dodds'
    },
    {
      name: 'Prosper Otemuyiwa',
      src: 'https://bit.ly/prosper-baba'
    },
    {
      name: 'Christian Nwamba',
      src: 'https://bit.ly/code-beast'
    }
  ];

  return (
    <AvatarGroup
      size={select('Size', themeAvatarSizes, 'md')}
      max={number('Maximum visible avatars', 2, { min: 1, step: 1 })}
    >
      {avatars.map((avatar) => (
        <Avatar {...avatar} badge={badge} />
      ))}
    </AvatarGroup>
  );
};
