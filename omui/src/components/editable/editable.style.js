const base = {
  fontSize: 'inherit',
  fontWeight: 'inherit',
  textAlign: 'inherit',
  bg: 'transparent',
  transition: 'all 0.2s',
  borderRadius: 'md',
  paddingX: '3px',
  marginX: '-3px'
};

export default {
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
