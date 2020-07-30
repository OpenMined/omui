import theme from '@chakra-ui/theme';

const { Accordion } = theme.components;

Accordion.baseStyle!.button = {
  ...Accordion.baseStyle!.button,
  _focus: { boxShadow: 'none' }
};

export default Accordion;
