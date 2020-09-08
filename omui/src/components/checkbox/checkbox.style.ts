import { mode } from '@chakra-ui/theme-tools';

const baseStyle = function (props: any) {
  const { colorScheme: c } = props;
  return {
    control: {
      w: '100%',
      transition: 'box-shadow 250ms',
      border: '2px solid',
      borderRadius: 'sm',
      borderColor: 'inherit',
      color: 'white',

      _checked: {
        bg: mode(`${c}.500`, `${c}.200`)(props),
        borderColor: mode(`${c}.500`, `${c}.200`)(props),
        color: mode('white', 'gray.900')(props),

        _hover: {
          bg: mode(`${c}.600`, `${c}.300`)(props),
          borderColor: mode(`${c}.600`, `${c}.300`)(props)
        },

        _disabled: {
          borderColor: mode('gray.200', 'transparent')(props),
          bg: mode('gray.200', 'whiteAlpha.300')(props),
          color: mode('gray.500', 'whiteAlpha.500')(props)
        }
      },

      _indeterminate: {
        bg: mode(`${c}.500`, `${c}.200`)(props),
        borderColor: mode(`${c}.500`, `${c}.200`)(props),
        color: mode('white', 'gray.900')(props)
      },

      _disabled: {
        bg: mode('gray.100', 'whiteAlpha.100')(props),
        borderColor: mode('gray.100', 'transparent')(props)
      },

      _focus: {
        boxShadow: 'none'
      },

      _invalid: {
        borderColor: mode('red.500', 'red.300')(props)
      }
    },

    label: {
      userSelect: 'none',
      _disabled: { opacity: 0.4 }
    },

    icon: {
      fontSize: '0.625rem'
    }
  };
};

const Checkbox = {
  baseStyle: baseStyle
};

export default Checkbox;
