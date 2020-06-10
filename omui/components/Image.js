import React from 'react';
import { Image as ChakraImage, AspectRatioBox } from '@chakra-ui/core';
import { convertRatios } from '../helpers/ratios';

const whVars = [
  'minW',
  'minWidth',
  'maxW',
  'maxWidth',
  'minH',
  'minHeight',
  'maxH',
  'maxHeight',
];

export const Image = ({ ratio, ...props }) => {
  const { ...whVars } = props;

  if (ratio) {
    return (
      <AspectRatioBox {...whVars} ratio={convertRatios(ratio)}>
        <ChakraImage objectFit="cover" {...props} />
      </AspectRatioBox>
    );
  }

  return <ChakraImage {...props} />;
};

Image.defaultProps = {
  ratio: null,
};
