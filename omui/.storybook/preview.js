import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Box, Theme } from '../src';

addDecorator((storyFn) => (
  <Theme>
    <Box p={6}>{storyFn()}</Box>
  </Theme>
));

addParameters({
  options: {
    showRoots: true,
    storySort: (a, b) => {
      const separator = '/';
      const config = [
        {
          category: 'Introduction',
          order: [
            'Getting Started',
            'Installation',
            'Usage in Framer',
            'Brand Guide',
            'Kitchen Sink'
          ]
        },
        {
          category: 'Primitives',
          order: [
            'Overview',
            'Box',
            'Flex',
            'Grid',
            'Text',
            'Heading',
            'Button',
            'Link',
            'Image'
          ]
        },
        {
          category: 'Components',
          order: ['Overview']
        }
      ];

      const story1 = a[1].kind.split(separator);
      const story2 = b[1].kind.split(separator);

      function getOrderNumber(needle, haystack) {
        let order = 9999;

        if (Array.isArray(haystack)) {
          order = haystack.findIndex(
            (h) => h.toLowerCase() === needle.toLowerCase()
          );

          if (order === -1) order = 9999;
        }

        return order;
      }

      const topLevelOrderArray = config.map((h) => h.category);
      const topLevelOrder1 = getOrderNumber(story1[0], topLevelOrderArray);
      const topLevelOrder2 = getOrderNumber(story2[0], topLevelOrderArray);

      if (story1[0] !== story2[0]) return topLevelOrder1 - topLevelOrder2;

      if (story1[1] !== story2[1]) {
        return (
          getOrderNumber(
            story1[1],
            config[topLevelOrder1] && config[topLevelOrder1].order
          ) -
          getOrderNumber(
            story2[1],
            config[topLevelOrder2] && config[topLevelOrder2].order
          )
        );
      }

      return 0;
    }
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      responsive: {
        name: 'Responsive',
        styles: {
          width: 'calc(100% - 20px)',
          height: 'calc(100% - 20px)'
        }
      }
    }
  }
});
