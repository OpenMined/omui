import * as React from 'react';
import * as OMUI from '../../omui';
import * as OMUITypes from '../../omui/types';
import { addPropertyControls } from 'framer';
import { themeHOC } from '../utils/theme-hoc';

type Props = OMUITypes.AccordionProps;

const ProppedAccordion = (props: Props) => (
  <OMUI.Accordion {...props} width="100%" height="100%">
    <OMUI.AccordionItem>
      <OMUI.AccordionHeader>
        <OMUI.Box flex="1" textAlign="left">
          Section 1 title
        </OMUI.Box>
        <OMUI.AccordionIcon />
      </OMUI.AccordionHeader>
      <OMUI.AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </OMUI.AccordionPanel>
    </OMUI.AccordionItem>
    <OMUI.AccordionItem>
      <OMUI.AccordionHeader>
        <OMUI.Box flex="1" textAlign="left">
          Section 2 title
        </OMUI.Box>
        <OMUI.AccordionIcon />
      </OMUI.AccordionHeader>
      <OMUI.AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </OMUI.AccordionPanel>
    </OMUI.AccordionItem>
  </OMUI.Accordion>
);

export const Accordion = themeHOC(ProppedAccordion);

const controls: object = {};

addPropertyControls(Accordion, controls);
