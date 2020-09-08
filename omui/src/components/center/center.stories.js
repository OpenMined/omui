import * as React from 'react';
import { Center } from './center';
import { Box } from '../box';

export default {
  title: 'Primitives/Center'
};

export const basic = () => (
  <Center bg="#da3d6929" w="400px" h="400px">
    <Box p="40px" bg="green.600">
      Box
    </Box>
  </Center>
);
