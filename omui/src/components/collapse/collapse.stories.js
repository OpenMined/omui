import React, { useState } from 'react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Collapse } from './';
import { Button, Box } from '../../';

export default { title: 'Components/Collapse', decorators: [withKnobs] };

const { timeout, animateOpacity } = Collapse.defaultProps;

export const Default = () => {
  const [show, setShow] = useState(false);

  const defaultContent = `I'm baby beard hot chicken fingerstache four loko copper mug leggings next level, chambray PBR&B williamsburg blog. Blue bottle slow-carb hashtag kogi hell of sriracha, taxidermy quinoa vice chillwave. Brooklyn farm-to-table normcore before they sold out, shabby chic subway tile heirloom street art palo santo synth mixtape prism yuccie succulents. Occupy meditation DIY yuccie ugh swag microdosing four loko readymade pork belly hell of authentic raw denim selfies. Migas single-origin coffee brunch shabby chic vape wolf poutine chicharrones freegan plaid intelligentsia next level tumeric food truck vaporware. Hammock green juice brunch mlkshk, 8-bit lo-fi palo santo swag fixie beard quinoa farm-to-table. Small batch narwhal wayfarers, poke blog forage tattooed migas venmo fashion axe woke single-origin coffee celiac.`;

  return (
    <>
      <Button onClick={() => setShow(!show)} mb={4}>
        {show ? 'Hide me' : 'Show me'}
      </Button>
      <Collapse
        isOpen={show}
        startingHeight={number('Starting height', 0, {
          min: 0,
          max: 1000,
          step: 10
        })}
        timeout={number('Timeout', timeout, {
          min: 500,
          max: 10000,
          step: 500
        })}
        animateOpacity={boolean('Animate opacity?', animateOpacity)}
      >
        <Box bg="gray.200" p={4}>
          {text('Content', defaultContent)}
        </Box>
      </Collapse>
    </>
  );
};

Default.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
};
