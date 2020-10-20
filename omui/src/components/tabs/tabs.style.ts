import { getColor, mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

function variantEnclosedColored(props: Dict) {
  const { colorScheme: c } = props;
  return {
    tab: {
      border: '1px solid',
      borderTopWidth: '2px',
      borderColor: 'inherit',
      bg: mode(`gray.50`, `whiteAlpha.50`)(props),
      mb: '-1px',
      _notLast: {
        mr: '-1px'
      },
      _selected: {
        bg: mode(`#fff`, 'gray.800')(props),
        color: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: 'inherit',
        borderTopColor: 'currentColor',
        borderBottomColor: 'transparent'
      }
    },
    tablist: {
      mb: '-1px',
      borderBottom: '1px solid',
      borderColor: 'inherit'
    }
  };
}

function variantSoftRounded(props: Dict) {
  const { colorScheme: c, theme } = props;
  return {
    tab: {
      borderRadius: '4px',
      fontWeight: 'semibold',
      color: 'gray.600',
      _selected: {
        color: getColor(theme, `${c}.700`),
        bg: getColor(theme, `${c}.100`)
      }
    }
  };
}

function variantSolidRounded(props: Dict) {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderRadius: '4px',
      fontWeight: 'semibold',
      color: mode('gray.600', 'inherit')(props),
      _selected: {
        color: mode(`#fff`, 'gray.800')(props),
        bg: mode(`${c}.600`, `${c}.300`)(props)
      }
    }
  };
}

const Tabs = {
  variants: {
    'enclosed-colored': variantEnclosedColored,
    'soft-rounded': variantSoftRounded,
    'solid-rounded': variantSolidRounded
  },
  defaultProps: {
    align: 'start',
    isFitted: false
  }
};

export default Tabs;
