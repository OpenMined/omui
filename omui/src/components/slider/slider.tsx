import React from 'react';
import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderProps as ISliderProps
} from '@chakra-ui/core';

import { default as SliderStyle } from './slider.style';

import { Flex } from '../flex';
import { Text } from '../text';

type SliderProps = ISliderProps & {
  icon?: React.ReactNode;
  showMinMax?: boolean;
};

const Slider = ({ icon, showMinMax, min, max, ...props }: SliderProps) => (
  <>
    <ChakraSlider {...props} min={min} max={max}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      {!icon && <SliderThumb />}
      {icon && <SliderThumb boxSize={8}>{icon}</SliderThumb>}
    </ChakraSlider>
    {(min !== undefined || max !== undefined) && showMinMax && (
      <Flex justify="space-between">
        {min !== undefined && (
          <Text fontSize="sm" fontWeight="medium" color="gray.500">
            {min}
          </Text>
        )}
        {max !== undefined && (
          <Text fontSize="sm" fontWeight="medium" color="gray.500">
            {max}
          </Text>
        )}
      </Flex>
    )}
  </>
);

Slider.defaultProps = {
  ...SliderStyle.defaultProps,
  showMinMax: true
};

export { Slider, SliderFilledTrack, SliderThumb, SliderTrack };
