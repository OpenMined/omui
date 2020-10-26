type Dict = Record<string, any>;

function baseStyleContainer(props: Dict) {
  const { colorScheme: c } = props;

  return {
    borderTopWidth: '1px',
    color: `${c}.400`,
    borderColor: `${c}.200`,
    _last: {
      borderBottomWidth: '1px'
    }
  };
}

function baseStyleButton(props: Dict) {
  const { colorScheme: c } = props;

  return {
    color: `${c}.400`,
    fontSize: '1rem',
    _focus: {
      boxShadow: 'none'
    },
    _hover: {
      bg: `${c}.50`
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed'
    },
    px: 4,
    py: 2
  };
}

function baseStylePanel(props: Dict) {
  const { colorScheme: c } = props;

  return {
    color: `${c}.400`,
    pt: 2,
    px: 4,
    pb: 5
  };
}

function baseStyle(props: Dict) {
  return {
    container: baseStyleContainer(props),
    button: baseStyleButton(props),
    panel: baseStylePanel(props)
  };
}

const Accordion = {
  baseStyle
};

export default Accordion;
