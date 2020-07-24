import theme from '@chakra-ui/theme';

const { Tag } = theme.components;

Tag.baseStyle.closeButton = {
  ...Tag.baseStyle.closeButton,
  _focus: {}
};

export default Tag;
