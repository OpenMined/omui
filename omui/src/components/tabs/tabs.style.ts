import theme from '@chakra-ui/theme';
import { BaseStyle, getColor, mode, Variants } from '@chakra-ui/theme-tools';

const { Tabs } = theme.components;

const alignments = {
  end: 'flex-end',
  center: 'center',
  start: 'flex-start'
};

const baseStyle: BaseStyle<typeof Tabs.register> = (props) => {
  const { align = 'start', isFitted } = props;
  return {
    tab: {
      flex: isFitted ? 1 : undefined,
      transition: 'all 0.2s',
      _focus: {
        zIndex: 1
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed'
      }
    },
    tablist: { justifyContent: alignments[align] },
    tabpanel: {
      padding: 4
    }
  };
};

const variants: Variants<typeof Tabs.register> = {
  ...Tabs.variants,
  line: function (props) {
    const { colorScheme: c } = props;
    return {
      tablist: {
        borderBottom: '2px solid',
        borderColor: 'inherit'
      },
      tab: {
        borderBottom: '2px solid',
        borderColor: 'transparent',
        marginBottom: '-2px',
        _selected: {
          color: mode(`${c}.600`, `${c}.300`)(props),
          borderColor: 'current'
        },
        _active: {
          bg: mode('gray.200', 'whiteAlpha.300')(props)
        },
        _disabled: {
          opacity: 0.4,
          cursor: 'not-allowed'
        }
      }
    };
  },

  'enclosed-colored': function (props) {
    const { colorScheme: c } = props;
    return {
      tab: {
        border: '1px solid',
        borderColor: 'inherit',
        bg: mode(`gray.50`, `whiteAlpha.50`)(props),
        marginBottom: '-1px',
        _notLast: {
          mr: '-1px'
        },
        _selected: {
          bg: mode(`#fff`, 'gray.800')(props),
          color: mode(`${c}.600`, `${c}.300`)(props),
          borderColor: 'inherit',
          borderTopColor: 'current',
          borderBottomColor: 'transparent'
        }
      },
      tablist: {
        marginBottom: '-1px',
        borderBottom: '1px solid',
        borderColor: 'inherit'
      }
    };
  },

  'solid-rounded': function (props) {
    const { colorScheme: c } = props;
    return {
      tab: {
        borderRadius: 'lg',
        fontWeight: 'medium',
        color: mode('gray.600', 'inherit')(props),
        _selected: {
          color: mode(`#fff`, 'gray.800')(props),
          bg: mode(`${c}.600`, `${c}.300`)(props)
        }
      }
    };
  }
};

Tabs.baseStyle = baseStyle;
Tabs.variants = variants;

export default Tabs;
