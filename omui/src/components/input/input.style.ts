import { getColor, mode } from '@chakra-ui/theme-tools';

function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode('blue.400', 'blue.300')(props),
    errorBorderColor: ec || mode('red.500', 'red.300')(props)
  };
}

function variantOutline(props: Record<string, any>) {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      border: '1px solid',
      borderColor: 'inherit',
      bg: 'inherit',
      _hover: {
        borderColor: mode('gray.300', 'whiteAlpha.400')(props)
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all'
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed'
      },
      _focus: {
        zIndex: 1,
        borderColor: getColor(theme, fc),
        boxShadow: `0 0 0 1px ${getColor(theme, fc)}`
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0 0 0 1px ${getColor(theme, ec)}`
      }
    },
    addon: {
      border: '1px solid',
      borderColor: mode('inherit', 'whiteAlpha.50')(props),
      bg: mode('gray.100', 'whiteAlpha.300')(props)
    }
  };
}

function variantFilled(props: Record<string, any>) {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      border: '2px solid',
      borderColor: 'transparent',
      bg: mode('gray.100', 'whiteAlpha.50')(props),
      _hover: {
        bg: mode('gray.200', 'whiteAlpha.100')(props)
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all'
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed'
      },
      _focus: {
        bg: 'transparent',
        borderColor: getColor(theme, fc)
      },
      _invalid: {
        borderColor: getColor(theme, ec)
      }
    },
    addon: {
      border: '2px solid',
      borderColor: 'transparent',
      bg: mode('gray.100', 'whiteAlpha.50')(props)
    }
  };
}

function variantFlushed(props: Record<string, any>) {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      borderBottom: '1px solid inherit',
      borderRadius: 0,
      pl: 0,
      pr: 0,
      bg: 'transparent',
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all'
      },
      _focus: {
        borderColor: getColor(theme, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme, fc)}`
      },
      _invalid: {
        borderColor: getColor(theme, ec)
      }
    },
    addon: {
      borderBottom: '2px solid',
      borderColor: 'inherit',
      borderRadius: 0,
      paddingX: 0,
      bg: 'transparent'
    }
  };
}

function variantUnstyled() {
  return {
    field: {
      pl: 0,
      pr: 0,
      bg: 'transparent'
    },
    addon: {
      bg: 'transparent',
      pl: 0,
      pr: 0,
      height: 'auto'
    }
  };
}

const Input = {
  variants: {
    outline: variantOutline,
    filled: variantFilled,
    flushed: variantFlushed,
    unstyled: variantUnstyled
  }
};

export default Input;
