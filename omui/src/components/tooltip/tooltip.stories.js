import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { Tooltip } from './';
import { Flex, Box } from '../../';

import { themeTooltipPlacements } from '../../helpers/get-theme';

export default { title: 'Components/Tooltip', decorators: [withKnobs] };

export const Default = () => (
  <Flex justifyContent="center" alignItems="center" width="100%" height={600}>
    <Tooltip
      label={text('Label', "I'm just a simple tooltip")}
      hasArrow={boolean('Has arrow?', true)}
      placement={select('Placement', themeTooltipPlacements, 'right')}
    >
      <Box p={8} width={200} bg="gray.200" textAlign="center">
        Hover me!
      </Box>
    </Tooltip>
  </Flex>
);

Default.parameters = {
  knobs: {
    escapeHTML: false
  }
};
