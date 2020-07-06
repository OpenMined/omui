import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { Modal } from './';
import { Button, Heading, Text, useDisclosure } from '../../';

import { themeModalSizes } from '../../helpers/get-theme';

export default { title: 'Components/Modal', decorators: [withKnobs] };

const { showClose, isCentered, size } = Modal.defaultProps;

export const Default = () => {
  const disclosure = useDisclosure();

  const Footer = () => (
    <>
      <Button colorScheme="gray">Cancel</Button>
      <Button ml={2}>Submit</Button>
    </>
  );

  return (
    <>
      <Button onClick={disclosure.onOpen}>Click me!</Button>
      <Modal
        {...disclosure}
        header={text('Header', 'Confirmation!')}
        footer={<Footer />}
        showClose={boolean('Show close button?', showClose)}
        isCentered={boolean('Is vertically centered?', isCentered)}
        size={select('Size', themeModalSizes, size)}
      >
        <>
          <Heading size="md">Hey there, what's up?</Heading>
          <Text mt={2}>Are you sure you want to have that milkshake?</Text>
        </>
      </Modal>
    </>
  );
};
