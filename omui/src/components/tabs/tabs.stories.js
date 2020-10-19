import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Tabs } from '.';
import { Tabs as TabsStyle } from '../../theme';
import { Heading, Text, Image } from '../../';

import { themeColors, themeBaseAlignments } from '../../theme/helpers';

export default { title: 'Components/Tabs', decorators: [withKnobs] };

const { variant, size, colorScheme, align, isFitted } = TabsStyle.defaultProps;

const themeTabsVariants = Object.keys(TabsStyle.variants);
const themeTabsSizes = Object.keys(TabsStyle.sizes);

export const Default = () => {
  const tabs = [
    {
      label: 'One',
      content: (
        <>
          <Heading size="lg">Just a test</Heading>
          <Text mt={2}>
            Aww yeah, I definitely think this first tab shows up
          </Text>
        </>
      )
    },
    {
      label: 'Two',
      isDisabled: true,
      content: (
        <>
          <Heading size="lg">Can' t see me</Heading>
          <Text mt={2}>Woah, we're disabled!</Text>
        </>
      )
    },
    {
      label: 'Final Section',
      selected: true,
      content: (
        <>
          <Heading size="lg">The last one</Heading>
          <Image
            src="https://www.openmined.org/images/logo.png"
            boxSize="lg"
            alt="Logo"
            mt={2}
          />
          <Text mt={2}>
            Aww yeah, I definitely think this final tab shows up
          </Text>
        </>
      )
    }
  ];

  return (
    <Tabs
      tabs={tabs}
      variant={select('Variant', themeTabsVariants, variant)}
      size={select('Size', themeTabsSizes, size)}
      colorScheme={select('Color', themeColors, colorScheme)}
      align={select('Alignment', themeBaseAlignments, align)}
      isFitted={boolean('Is fitted?', isFitted)}
    />
  );
};
