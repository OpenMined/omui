import theme from '@chakra-ui/theme';
import { BaseStyle, mode } from '@chakra-ui/theme-tools';

const { CloseButton } = theme.components;

const baseStyle: BaseStyle<typeof CloseButton.register> = (props) => {
  return {
    icon: {},
    container: {
      borderRadius: 'md',
      transition: 'all 0.2s',
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
        boxShadow: 'none'
      },
      _hover: {
        bg: mode(`blackAlpha.100`, `whiteAlpha.100`)(props)
      },
      _active: {
        bg: mode(`blackAlpha.200`, `whiteAlpha.200`)(props)
      }
    }
  };
};

CloseButton.baseStyle = baseStyle;

export default CloseButton;
