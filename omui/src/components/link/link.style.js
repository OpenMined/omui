export default {
  baseStyle: {
    transition: `all 0.15s ease-out`,
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'blue.500',
    _hover: {
      color: 'blue.700'
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      textDecoration: 'none'
    }
  }
};
