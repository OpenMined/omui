import React from 'react';
import { Text as OMUIText } from '../../omui';
import { TextProps } from '../../omui/types';
import { addPropertyControls, ControlType } from 'framer';
import themeHOC from '../utils/theme-hoc';
import { typography } from '../utils/prop-controls';

type Props = TextProps;

const ProppedText = (props: Props) => (
  <OMUIText {...props} width="100%" height="100%">
    {props.text}
  </OMUIText>
);

export const Text = themeHOC(ProppedText);
Text.displayName = 'Text';
Text.defaultProps = {
  width: 200,
  height: 26,
};

const controls: object = {
  text: {
    type: ControlType.String,
    defaultValue: 'Start typing...',
  },
  ...typography,
};

addPropertyControls(Text, controls);
