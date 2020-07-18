import React from 'react';
import {
  List as ChakraList,
  OrderedList,
  UnorderedList,
  ListItem,
  ListIcon,
  ListProps as IListProps
} from '@chakra-ui/core';

import { Flex } from '../flex';
import { Box } from '../box';

type ItemProps = {
  label: string;
};

type ListTypes =
  | 'ordered'
  | 'unordered'
  | 'symbol'
  | 'object'
  | 'a'
  | 'abbr'
  | 'address'
  | 'area'
  | 'article'
  | 'aside'
  | 'b'
  | 'bdi'
  | 'bdo'
  | 'big'
  | 'blockquote'
  | 'button'
  | 'caption'
  | 'cite'
  | 'circle'
  | 'code'
  | 'col'
  | 'dd'
  | 'del'
  | 'details'
  | 'dfn'
  | 'div'
  | 'dl'
  | 'dt'
  | 'em'
  | 'fieldset'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'form'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'header'
  | 'hr'
  | 'i'
  | 'img'
  | 'input'
  | 'ins'
  | 'kbd'
  | 'label'
  | 'legend'
  | 'li'
  | 'main'
  | 'mark'
  | 'nav'
  | 'ol'
  | 'optgroup'
  | 'option'
  | 'output'
  | 'p'
  | 'path'
  | 'picture'
  | 'pre'
  | 'q'
  | 'rect'
  | 's'
  | 'svg'
  | 'section'
  | 'select'
  | 'small'
  | 'span'
  | 'strong'
  | 'sub'
  | 'summary'
  | 'sup'
  | 'table'
  | 'tbody'
  | 'td'
  | 'textarea'
  | 'tfoot'
  | 'th'
  | 'thead'
  | 'time'
  | 'tr'
  | 'u'
  | 'ul'
  | 'video'
  | 'audio'
  | 'base'
  | 'body'
  | 'br'
  | 'canvas'
  | 'colgroup'
  | 'data'
  | 'datalist'
  | 'dialog'
  | 'embed'
  | 'head'
  | 'hgroup'
  | 'html'
  | 'iframe'
  | 'keygen'
  | 'link'
  | 'map'
  | 'menu'
  | 'menuitem'
  | 'meta'
  | 'meter'
  | 'noindex'
  | 'noscript'
  | 'param'
  | 'progress'
  | 'rp'
  | 'rt'
  | 'ruby'
  | 'samp'
  | 'script'
  | 'source'
  | 'style'
  | 'template'
  | 'title'
  | 'track'
  | 'var'
  | 'wbr'
  | 'webview'
  | 'animate'
  | 'animateMotion'
  | 'animateTransform'
  | 'clipPath'
  | 'defs'
  | 'desc'
  | 'ellipse'
  | 'feBlend'
  | 'feColorMatrix'
  | 'feComponentTransfer'
  | 'feComposite'
  | 'feConvolveMatrix'
  | 'feDiffuseLighting'
  | 'feDisplacementMap'
  | 'feDistantLight'
  | 'feDropShadow'
  | 'feFlood'
  | 'feFuncA'
  | 'feFuncB'
  | 'feFuncG'
  | 'feFuncR'
  | 'feGaussianBlur'
  | 'feImage'
  | 'feMerge'
  | 'feMergeNode'
  | 'feMorphology'
  | 'feOffset'
  | 'fePointLight'
  | 'feSpecularLighting'
  | 'feSpotLight'
  | 'feTile'
  | 'feTurbulence'
  | 'filter'
  | 'foreignObject'
  | 'g'
  | 'image'
  | 'line'
  | 'linearGradient'
  | 'marker'
  | 'mask'
  | 'metadata'
  | 'mpath'
  | 'pattern'
  | 'polygon'
  | 'polyline'
  | 'radialGradient'
  | 'stop'
  | 'switch'
  | 'text'
  | 'textPath'
  | 'tspan'
  | 'use'
  | 'view'
  | 'slot'
  | React.ComponentClass<any, any>
  | React.FunctionComponent<any>
  | undefined;

type ListProps = IListProps & {
  type: ListTypes;
  items: ItemProps[];
};

export const List = ({ type, items, ...props }: ListProps) => {
  if (type === 'ordered') {
    return (
      <OrderedList {...props}>
        {items.map(({ label, ...item }: ItemProps) => (
          <ListItem {...item} key={label}>
            {label}
          </ListItem>
        ))}
      </OrderedList>
    );
  } else if (type === 'unordered') {
    // TODO: Once this PR is merged (https://github.com/chakra-ui/chakra-ui/pull/1032), the styleType prop below will not be needed
    return (
      <UnorderedList {...props} styleType="bullet">
        {items.map(({ label, ...item }: ItemProps) => (
          <ListItem {...item} key={label}>
            {label}
          </ListItem>
        ))}
      </UnorderedList>
    );
  }

  return (
    <ChakraList {...props}>
      {items.map(({ label, ...item }: ItemProps) => (
        <ListItem {...item} key={label}>
          <Flex alignItems="center">
            <ListIcon as={type} />
            <Box>{label}</Box>
          </Flex>
        </ListItem>
      ))}
    </ChakraList>
  );
};
