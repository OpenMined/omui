import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Menu } from './';
import { Flex, Image } from '../../';
import { MoonIcon } from '@chakra-ui/icons';

import { themeMenuPlacements } from '../../helpers/get-theme';

export default { title: 'Components/Menu', decorators: [withKnobs] };

export const Default = () => {
  const menu = [
    {
      label: 'Your Account',
      type: 'list',
      items: [
        {
          label: 'Contact',
          type: 'submenu',
          items: [
            {
              label: 'Facebook',
              onClick: () => console.log('Facebook')
            },
            {
              label: 'Twitter',
              onClick: () => console.log('Twitter')
            },
            {
              label: 'Email',
              onClick: () => console.log('Email')
            }
          ]
        },
        {
          label: 'Profile',
          onClick: () => console.log('Profile page'),
          isDisabled: true,
          visual: (
            <Image borderRadius="full" src="https://placekitten.com/100/100" />
          )
        }
      ]
    },
    {
      type: 'separator'
    },
    {
      label: 'Select one',
      type: 'radio',
      items: [
        {
          label: 'Ascending',
          value: 'asc'
        },
        {
          label: 'Descending',
          value: 'desc'
        }
      ]
    },
    {
      label: 'Select multiple',
      type: 'checkbox',
      defaultValue: ['green'],
      items: [
        {
          label: 'Red',
          value: 'red',
          visual: <MoonIcon color="red.500" />
        },
        {
          label: 'Green',
          value: 'green',
          visual: <MoonIcon color="green.500" />
        },
        {
          label: 'Blue',
          value: 'blue',
          visual: <MoonIcon color="blue.500" />
        }
      ]
    }
  ];

  return (
    <Flex justifyContent="center" alignItems="center" width="100%" height={600}>
      <Menu
        menu={menu}
        label={text('Button label', 'Click me!')}
        placement={select('Placement', themeMenuPlacements, 'bottom')}
      />
    </Flex>
  );
};
