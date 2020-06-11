import React from 'react';
import {
  Image as ChakraImage,
  AspectRatioBox,
  ImageProps
} from '@chakra-ui/core';
import { convertRatios } from '../helpers/ratios';

const whVars = [
  'minW',
  'minWidth',
  'maxW',
  'maxWidth',
  'minH',
  'minHeight',
  'maxH',
  'maxHeight'
];

interface ModifiedImageProps extends ImageProps {
  ratio: number | string;
}

export const Image = ({ ratio, ...props }: ModifiedImageProps) => {
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
  ratio: null
};
