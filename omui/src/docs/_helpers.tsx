import React from 'react';
import { isAccessible, getColor } from '@chakra-ui/theme-tools';

import { Flex, Text, useClipboard, useToast } from '../';
import theme from '../theme';
import { colors } from '../theme/foundations/colors';

export const ColorPalette = () => {
  const toast = useToast();
  return (
    <>
      {Object.keys(colors).map((color) => (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mt={3}
          key={color}
        >
          <Text width="80px" fontWeight="bold">
            {color[0].toUpperCase() + color.slice(1)}
          </Text>
          {Object.keys(colors[color]).map((num) => {
            const colorCode = `${color}.${num}`;
            // eslint-disable-next-line
            const [hasCopied, onCopy] = useClipboard(
              getColor(theme, colorCode)
            );

            return (
              <Flex
                key={colorCode}
                width="80px"
                height="80px"
                bg={colorCode}
                borderRadius="lg"
                justifyContent="center"
                alignItems="center"
                onClick={() => {
                  onCopy();

                  toast({
                    title: `Copied hex value for ${colorCode}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true
                  });
                }}
                cursor="pointer"
              >
                <Text
                  color={
                    isAccessible('gray.900', colorCode)(theme)
                      ? 'gray.900'
                      : 'white'
                  }
                >
                  {num}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      ))}
    </>
  );
};

export const withOrdinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd'],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
