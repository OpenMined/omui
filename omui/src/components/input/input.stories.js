import React from 'react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';
import { PhoneIcon, CheckIcon } from '@chakra-ui/icons';

import { Input, NumberInput, PinInput } from './';
import { Input as InputStyle } from '../../theme';

export default { title: 'Components/Input', decorators: [withKnobs] };

const { variant } = InputStyle.defaultProps;
const themeInputVariants = Object.keys(InputStyle.variants);

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

export const Number = () => (
  <NumberInput
    defaultValue={15}
    min={number('Minimum', 5, { min: 1, max: -100, step: 1 })}
    max={number('Maximum', 30, { min: 1, max: 100, step: 1 })}
    step={number('Step', 5, { min: 1, max: 10, step: 1 })}
    precision={number('Precision', 2, { min: 0, max: 10, step: 1 })}
  />
);

export const PinNumber = () => (
  <PinInput length={number('Length', 4, { min: 1, max: 8, step: 1 })} />
);
