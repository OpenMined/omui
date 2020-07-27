import theme from '@chakra-ui/theme';

const { Menu } = theme.components;

const baseStyle = (props: object) => {

  let MenuBaseStyle = Menu.baseStyle!(props);

  return {
    ...MenuBaseStyle,
    list: {
      ...MenuBaseStyle.list,
      outline: 0,
      border: '1px solid',
      borderColor: 'inherit',
      borderWidth: 'initial'
    },
    item: {
      ...MenuBaseStyle.item,
      width: '100%',
      outline: 0,
      textDecoration: 'none',
    },
    groupTitle: {
      ...MenuBaseStyle.groupTitle,
      fontWeight: 'medium',
      fontSize: 'sm'
    }
  }
}

Menu.baseStyle = baseStyle;

export default Menu;
