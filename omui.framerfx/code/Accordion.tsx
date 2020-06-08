import * as React from 'react';
import * as OMUI from '../../omui';
import { addPropertyControls, ControlType } from 'framer';
import { themeHOC } from '../utils/theme-hoc';

const ProppedAccordion = (props: any) => {
  const { numSections, ...rest } = props;

  return (
    <OMUI.Accordion {...rest} width="100%" height="100%">
      {[...Array(numSections).keys()].map(() => (
        <OMUI.AccordionItem>
          <OMUI.AccordionHeader>
            <OMUI.Box flex="1" textAlign="left">
              Section 1 title
            </OMUI.Box>
            <OMUI.AccordionIcon />
          </OMUI.AccordionHeader>
          <OMUI.AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </OMUI.AccordionPanel>
        </OMUI.AccordionItem>
      ))}
    </OMUI.Accordion>
  );
};

export const Accordion = themeHOC(ProppedAccordion);

const controls: object = {
  numSections: {
    type: ControlType.Number,
    title: '# of Sections',
    defaultValue: 2,
    min: 1,
    max: 5,
    step: 1,
    displayStepper: true,
  },
};

addPropertyControls(Accordion, controls);
