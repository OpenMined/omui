import theme from '@chakra-ui/theme';

const { Editable } = theme.components;

Editable.baseStyle.input = {
  ...Editable.baseStyle.input,
  _focus: {}
};

export default Editable;
