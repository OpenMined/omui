import React, { forwardRef } from 'react';
import {
  Menu as ChakraMenu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuGroup,
  MenuDivider as MenuSeparator,
  MenuOptionGroup,
  MenuItemOption,
  MenuProps as IMenuProps
} from '@chakra-ui/core';

import { Flex } from '../flex';
import { Box } from '../box';

import { default as MenuStyle } from './menu.style';

type MenuProps = {
  type?: 'list' | 'submenu' | 'radio' | 'checkbox' | 'separator';
  label?: string;
  visual?: React.ReactNode;
  value?: string;
  onClick?: () => void;
  items?: MenuProps[];
};

type MainMenuProps = IMenuProps & {
  children: string | React.ReactNode;
  label: string;
  menu: MenuProps[];
};

// TODO: We should be more consistent about closing on click depending on which type of item is clicked

export const Menu = ({
  children,
  label,
  menu,
  closeOnSelect,
  ...props
}: MainMenuProps) => {
  const composeItemLabel = (
    label: MenuProps['label'],
    visual: MenuProps['visual']
  ) => {
    if (!visual) return label;

    return (
      <Flex alignItems="center">
        <Box mr={2} maxHeight="2rem" maxWidth="2rem">
          {visual}
        </Box>
        <Box>{label}</Box>
      </Flex>
    );
  };

  const renderMenu = (menuItems: MenuProps[]) => {
    return menuItems.map(({ type, label, visual, items, ...item }, index) => {
      let itemElem;

      if (type === 'separator')
        itemElem = <MenuSeparator {...item} key={`separator-${index}`} />;
      else if (type === 'radio' || type === 'checkbox') {
        itemElem = (
          <MenuOptionGroup
            {...item}
            title={label}
            type={type}
            key={`option-group-${label}`}
          >
            {items &&
              items.map(
                ({ value, label: itemLabel, visual: itemVisual, ...i }) => (
                  // @ts-ignore
                  <MenuItemOption
                    {...i}
                    value={value}
                    key={`item-option-${label}-${itemLabel}`}
                  >
                    {composeItemLabel(itemLabel, itemVisual)}
                  </MenuItemOption>
                )
              )}
          </MenuOptionGroup>
        );
      } else if (type === 'submenu') {
        const Submenu = forwardRef(
          // @ts-ignore
          ({ children, items, ...props }, ref) => (
            <ChakraMenu>
              {/* @ts-ignore */}
              <MenuButton ref={ref} {...props}>
                {/* @ts-ignore */}
                {composeItemLabel(children, props.visual)}
              </MenuButton>
              <MenuList>{renderMenu(items)}</MenuList>
            </ChakraMenu>
          )
        );

        itemElem = (
          <MenuItem
            {...item}
            as={Submenu}
            // @ts-ignore
            items={items}
            key={`submenu-${label}`}
          >
            {composeItemLabel(label, visual)}
          </MenuItem>
        );
      } else if (type === 'list') {
        itemElem = (
          <MenuGroup {...item} title={label} key={`group-${label}`}>
            {/* @ts-ignore */}
            {renderMenu(items)}
          </MenuGroup>
        );
      } else
        itemElem = (
          <MenuItem {...item} key={`item-${label}`}>
            {composeItemLabel(label, visual)}
          </MenuItem>
        );

      return itemElem;
    });
  };

  const flattenMenu = (array: MenuProps[]) => {
    let result: MenuProps[] = [];

    array.forEach((a) => {
      result.push(a);
      if (Array.isArray(a.items)) {
        result = result.concat(flattenMenu(a.items));
      }
    });

    return result;
  };

  const flattenedMenu = flattenMenu(menu);
  const hasNonListItems =
    flattenedMenu.filter((i) => i.type === 'checkbox' || i.type === 'radio')
      .length > 0;

  return (
    <ChakraMenu
      {...props}
      closeOnSelect={hasNonListItems ? false : closeOnSelect}
    >
      {/* TODO: Fix this with children... */}
      <MenuButton>{label}</MenuButton>
      <MenuList>{renderMenu(menu)}</MenuList>
    </ChakraMenu>
  );
};

Menu.defaultProps = {
  ...MenuStyle.defaultProps,
  closeOnSelect: true
};
