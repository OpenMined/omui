import React from 'react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';

import { Box, Flex, Badge, Text, Image, Icon } from '../';
import { sizes } from '../theme/sizes';
import { themeBoxColors } from '../helpers/get-theme';

export default { title: 'Box', decorators: [withKnobs] };

export const Default = () => (
  <Box
    bg={select('Background', themeBoxColors, 'orange.200')}
    color={select('Color', themeBoxColors, 'orange.700')}
    padding={select('Padding', Object.keys(sizes), '4')}
  >
    {text('Text', 'A box is just a div tag with styled props')}
  </Box>
);

export const ComplexExample = () => {
  const property = {
    imageUrl: text('Image Source', 'https://bit.ly/2Z4KKcF'),
    imageAlt: text('Image Alt', 'Rear view of modern home with pool'),
    beds: number('Beds', 3, { min: 0, max: 5, step: 1 }),
    baths: number('Baths', 2, { min: 0, max: 5, step: 1 }),
    title: text(
      'Title',
      'Modern home in city center in the heart of historic Los Angeles'
    ),
    price: number('Price', 1900, { min: 100, max: 99999, step: 1 }),
    reviewCount: number('Reviews', 34, { min: 0, max: 9999, step: 1 }),
    rating: number('Rating', 4, { min: 1, max: 5, step: 1 })
  };

  const numberCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const pluralize = (val, word) =>
    `${numberCommas(val)} ${val === 1 ? word : word + 's'}`;

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box p="6">
        <Flex alignItems="center">
          <Badge pr="2" variantColor="green">
            New
          </Badge>
          <Text
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {pluralize(property.beds, 'bed')} &bull;{' '}
            {pluralize(property.baths, 'bath')}
          </Text>
        </Flex>
        <Text
          mt="2"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Text>
        <Flex alignItems="center">
          ${numberCommas(property.price)}
          <Text as="span" color="gray.600" ml="1" fontSize="sm">
            / wk
          </Text>
        </Flex>
        <Flex mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <Icon
                key={i}
                name="star"
                mr="1"
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Text as="span" ml="2" color="gray.600" fontSize="sm">
            {pluralize(property.reviewCount, 'review')}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
