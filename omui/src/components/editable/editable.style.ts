// import { ComponentTheme } from '@chakra-ui/theme-tools';
import { SystemProps } from '@chakra-ui/system';

const base: SystemProps = {
  fontSize: 'inherit',
  fontWeight: 'inherit',
  textAlign: 'inherit',
  bg: 'transparent',
  transition: 'all 0.2s',
  borderRadius: 'md',
  paddingX: '3px',
  marginX: '-3px'
};

// TODO: remove the 'any' type
const Editable: any = {
  baseStyle: {
    Preview: {
      ...base,
      cursor: 'text',
      display: 'inline-block'
    },
    Input: {
      ...base,
      outline: 0,
      width: 'full',
      _placeholder: {
        opacity: 0.6
      }
    }
  }
};

export default Editable;
