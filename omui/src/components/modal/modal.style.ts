import theme from '@chakra-ui/theme';
import { BaseStyle, mode } from '@chakra-ui/theme-tools';

const { Modal } = theme.components;

const baseStyle: BaseStyle<typeof Modal.register> = (props) => {
  const { isCentered, scrollBehavior } = props;

  return {
    overlay: {
      bg: 'rgba(0,0,0,0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: isCentered ? 'center' : 'flex-start',
      overflow: scrollBehavior === 'inside' ? 'hidden' : 'auto'
    },

    content: {
      borderRadius: 'md',
      bg: mode('white', 'gray.700')(props),
      color: 'inherit',
      marginY: '3.75rem',
      maxHeight:
        scrollBehavior === 'inside' ? 'calc(100vh - 7.5rem)' : undefined,
      boxShadow: mode(
        '0 7px 14px 0 rgba(0,0,0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, .07)',
        'dark-lg'
      )(props)
    },

    header: {
      paddingX: 6,
      paddingY: 4,
      fontSize: 'xl',
      fontWeight: 'medium'
    },

    body: {
      paddingX: 6,
      paddingY: 2,
      flex: 1,
      overflow: scrollBehavior === 'inside' ? 'auto' : undefined
    },

    footer: {
      paddingX: 6,
      paddingY: 4
    }
  };
};

Modal.baseStyle = baseStyle;

export default Modal;
