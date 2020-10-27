function baseStyle(props: any) {
  const { colorScheme: c } = props;

  let backgroundColor;

  switch (c) {
    case 'white':
      backgroundColor = 'white';
      break;
    case 'gray':
      backgroundColor = 'gray.200';
      break;
    default:
      backgroundColor = `${c}.50`;
      break;
  }

  return {
    content: {
      bg: backgroundColor,
      border: '1px solid',
      borderColor: 'inherit',
      borderRadius: 'md',
      boxShadow: 'sm',
      w: '100%',
      maxW: 'xs',
      zIndex: '1',
      _focus: {
        outline: 0,
        boxShadow: 'none'
      }
    },
    header: {
      px: 3,
      py: 2,
      borderBottomWidth: '1px'
    },
    body: {
      px: 3,
      py: 2
    },
    footer: {
      px: 3,
      py: 2,
      borderTopWidth: '1px'
    }
  };
}

const Popover = {
  baseStyle
};

export default Popover;
