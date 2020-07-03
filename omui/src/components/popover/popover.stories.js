import React from 'react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';

import { Popover } from './';
import { Button, Heading, Text, Flex } from '../../';

import { themePopperPlacements } from '../../helpers/get-theme';

export default { title: 'Components/Popover', decorators: [withKnobs] };

const { showClose, showArrow } = Popover.defaultProps;

export const Default = () => {
  const Content = (props) => (
    <>
      <Heading size="md">Hey there, what's up?</Heading>
      <Text mt={2}>Are you sure you want to have that milkshake?</Text>
    </>
  );

  return (
    <Flex justifyContent="center" alignItems="center" width="100%" height={600}>
      <Popover
        content={<Content />}
        header={text('Header', 'Confirmation!')}
        footer={text('Footer', 'Awesomesauce.')}
        placement={select('Placement', themePopperPlacements, 'bottom')}
        showClose={boolean('Show close button?', showClose)}
        showArrow={boolean('Show arrow?', showArrow)}
      >
        <Button>Click me!</Button>
      </Popover>
    </Flex>
  );
};
