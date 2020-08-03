import theme from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

const { CloseButton } = theme.components;

const baseStyle = function (props: any) {
  const hoverBg = mode(`blackAlpha.100`, `whiteAlpha.100`)(props);
  const activeBg = mode(`blackAlpha.200`, `whiteAlpha.200`)(props);

  return {
    borderRadius: 'md',
    transition: 'all 0.2s',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      boxShadow: 'none'
    },
    _hover: { bg: hoverBg },
    _active: { bg: activeBg },
    _focus: {
      boxShadow: 'none'
    }
  };
};

CloseButton.baseStyle = baseStyle;

export default CloseButton;
