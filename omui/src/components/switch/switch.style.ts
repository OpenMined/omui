import theme from '@chakra-ui/theme';
import { BaseStyle, mode } from '@chakra-ui/theme-tools';
import { base } from '../../theme/foundations/colors';

const { Switch } = theme.components;

const baseStyle: BaseStyle<typeof Switch.register> = (props) => {
  const { colorScheme: c } = props;
  return {
    track: {
      borderRadius: 'full',
      padding: '2px',
      transition: 'all 120ms',
      bg: mode('gray.300', 'whiteAlpha.400')(props),
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      _checked: {
        bg: mode(`${c}.500`, `${c}.200`)(props)
      }
    },
    thumb: {
      bg: 'white',
      transition: 'transform 250ms',
      borderRadius: 'full',
      transform: 'translateX(0)'
    }
  };
};

Switch.baseStyle = baseStyle;

export default Switch;
