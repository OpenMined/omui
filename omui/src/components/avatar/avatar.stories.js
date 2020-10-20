import React from 'react';
import { withKnobs, select, text, number } from '@storybook/addon-knobs';

import { Avatar, AvatarGroup } from './';
import { Avatar as AvatarStyle } from '../../theme';
import { themeAllPossibleColors, themeBaseColors } from '../../theme/helpers';

const themeAvatarSizes = Object.keys(AvatarStyle.sizes);

export default { title: 'Components/Avatar', decorators: [withKnobs] };

const { size } = AvatarStyle.defaultProps;

export const Default = () => (
  <Avatar
    src={text('Source', 'https://bit.ly/sage-adebayo')}
    size={select('Size', themeAvatarSizes, size)}
    badge={select('Badge color', ['', ...themeBaseColors])}
    bg={select('Fallback color', ['', ...themeAllPossibleColors])}
    name={text('Name', 'Segun Adebayo')}
  />
);

export const WithSilhouetteFallback = () => (
  <Avatar
    src={text('Source', 'https://www.openmined.org/this-is-a-bad-url.png')}
    size={select('Size', themeAvatarSizes, size)}
    badge={select('Badge color', ['', ...themeBaseColors])}
    bg={select('Fallback color', ['', ...themeAllPossibleColors])}
    name=""
  />
);

export const WithNameFallback = () => (
  <Avatar
    src={text('Source', 'https://www.openmined.org/this-is-a-bad-url.png')}
    size={select('Size', themeAvatarSizes, size)}
    badge={select('Badge color', ['', ...themeBaseColors])}
    bg={select('Fallback color', ['', ...themeAllPossibleColors])}
    name={text('Name', 'Hello World')}
  />
);

export const Group = () => {
  const badge = select('Badge color', ['', ...themeBaseColors]);

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
      size={select('Size', themeAvatarSizes, size)}
      max={number('Maximum visible avatars', 2, { min: 1, step: 1 })}
    >
      {avatars.map((avatar) => (
        <Avatar {...avatar} badge={badge} />
      ))}
    </AvatarGroup>
  );
};
