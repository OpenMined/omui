import theme from '@chakra-ui/theme';

const { Editable } = theme.components;

Editable.baseStyle!.input = {
  ...Editable.baseStyle!.input,
  _focus: { boxShadow: 'none' }
};

export default Editable;
