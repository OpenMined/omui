import React from 'react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import { Drawer, Button, Text, useDisclosure } from '../..';
import {
  themeDrawerPlacements,
  themeDrawerSizes
} from '../../helpers/get-theme';

export default { title: 'Components/Drawer', decorators: [withKnobs] };

const { placement, size } = Drawer.defaultProps;

export const Default = () => {
  const disclosure = useDisclosure();
  const btnRef = React.useRef();

  const footer = (
    <>
      <Button variant="outline" mr={3} onClick={disclosure.onClose}>
        Cancel
      </Button>
      <Button>Save</Button>
    </>
  );

  return (
    <>
      <Button ref={btnRef} onClick={disclosure.onOpen}>
        Open
      </Button>
      <Drawer
        disclosure={disclosure}
        finalRef={btnRef}
        closeButton={boolean('Show close button?', true)}
        placement={select('Placement', themeDrawerPlacements, placement)}
        size={select('Size', themeDrawerSizes, size)}
        header={text('Header', 'I am just a drawer')}
        footer={footer}
      >
        <Text>Coming out of nowhere!</Text>
      </Drawer>
    </>
  );
};
