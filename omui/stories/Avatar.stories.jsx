import React from 'react';
import {
  withKnobs,
  boolean,
  select,
  text,
  number
} from '@storybook/addon-knobs';

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

  return (
    <AvatarGroup
      size={select('Size', themeAvatarSizes, 'md')}
      max={number('Maximum visible avatars', 2, { min: 1, step: 1 })}
    >
      <Avatar
        name="Ryan Florence"
        badge={badge}
        src="https://bit.ly/ryan-florence"
      />
      <Avatar
        name="Segun Adebayo"
        badge={badge}
        src="https://bit.ly/sage-adebayo"
      />
      <Avatar
        name="Kent Dodds"
        badge={badge}
        src="https://bit.ly/kent-c-dodds"
      />
      <Avatar
        name="Prosper Otemuyiwa"
        badge={badge}
        src="https://bit.ly/prosper-baba"
      />
      <Avatar
        name="Christian Nwamba"
        badge={badge}
        src="https://bit.ly/code-beast"
      />
    </AvatarGroup>
  );
};
