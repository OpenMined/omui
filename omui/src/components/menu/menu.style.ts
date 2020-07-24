import theme from '@chakra-ui/theme';
import { BaseStyle, mode } from '@chakra-ui/theme-tools';

const { Menu } = theme.components;

const baseStyle: BaseStyle<typeof Menu.register> = (props) => {
  return {
    menuList: {
      bg: mode(`#fff`, `gray.700`)(props),
      boxShadow: mode(`sm`, `dark-lg`)(props),
      color: 'inherit',
      outline: 0,
      minWidth: '3xs',
      paddingY: '2',
      zIndex: '1',
      borderRadius: 'md',
      border: '1px solid',
      borderColor: 'inherit'
    },

    menuItem: {
      width: '100%',
      outline: 0,
      textDecoration: 'none',
      paddingY: '0.4rem',
      paddingX: '0.8rem',
      transition: 'background 50ms ease-in 0s',
      _focus: {
        bg: mode(`gray.100`, `whiteAlpha.100`)(props)
      },
      _active: {
        bg: mode(`gray.200`, `whiteAlpha.200`)(props)
      },
      _expanded: {
        bg: mode(`gray.100`, `whiteAlpha.100`)(props)
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed'
      }
    },

    groupTitle: {
      marginX: 4,
      marginY: 2,
      fontWeight: 'medium',
      fontSize: 'sm'
    },

    command: {
      opacity: 0.6
    }
  };
};

Menu.baseStyle = baseStyle;

export default Menu;
