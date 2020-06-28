import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { Input } from '../..';

import { themeInputVariants } from '../../helpers/get-theme';
import { PhoneIcon, CheckIcon } from '@chakra-ui/icons';

export default { title: 'Components/Input', decorators: [withKnobs] };

const { variant } = Input.defaultProps;

export const Default = () => {
  const left = select('Left side', ['nothing', 'text', 'icon'], 'nothing');
  const right = select('Right side', ['nothing', 'text', 'icon'], 'nothing');

  const leftText = left === 'text' ? text('Left side text', 'https://') : null;
  const rightText = right === 'text' ? text('Right side text', '.com') : null;

  let leftSide = null;
  if (left === 'text') leftSide = leftText;
  else if (left === 'icon') leftSide = <PhoneIcon color="gray.500" />;

  let rightSide = null;
  if (right === 'text') rightSide = rightText;
  else if (right === 'icon') rightSide = <CheckIcon color="green.500" />;

  return (
    <Input
      placeholder={text('Placeholder', 'Start typing...')}
      variant={select('Variant', themeInputVariants, variant)}
      type="text"
      left={leftSide}
      right={rightSide}
    />
  );
};
