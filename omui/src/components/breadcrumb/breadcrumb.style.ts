type Dict = Record<string, any>;

function baseStyleLink(props: Dict) {
  const { colorScheme: c } = props;

  return {
    transition: 'all 0.15s ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: `${c}.500`,
    _hover: {
      textDecoration: 'underline'
    },
    _focus: {
      boxShadow: 'outline'
    }
  };
}

function baseStyleSeparator(props: Dict) {
  const { colorScheme: c } = props;
  return {
    color: `${c}.500` + ' !important'
  };
}

function baseStyle(props: Dict) {
  return {
    link: baseStyleLink(props),
    separator: baseStyleSeparator(props)
  };
}

const Breadcrumb = {
  baseStyle
};

export default Breadcrumb;
