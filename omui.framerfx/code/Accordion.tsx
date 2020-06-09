import React from 'react';
import {
  Accordion as OMUIAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Box,
} from '../../omui';
import { AccordionProps } from '../../omui/types';
import { addPropertyControls, ControlType } from 'framer';
import themeHOC from '../utils/theme-hoc';

const maxNumSections = 5;
const tempTitle = 'My title';
const tempContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

type Props = AccordionProps & {
  numSections: number;
};

const ProppedAccordion = (props: Props) => (
  <OMUIAccordion {...props} width="100%" height="100%">
    {[...Array(props.numSections).keys()].map((_, index) => (
      <AccordionItem key={`accordion-item-${index}`}>
        <AccordionHeader>
          <Box flex="1" textAlign="left">
            {props[`section${index + 1}Title`]}
          </Box>
          <AccordionIcon />
        </AccordionHeader>
        <AccordionPanel pb={4} position="relative">
          {props[`section${index + 1}Content`]}
        </AccordionPanel>
      </AccordionItem>
    ))}
  </OMUIAccordion>
);

export const Accordion = themeHOC(ProppedAccordion);
Accordion.displayName = 'Accordion';

const genSections = (num) => {
  const sections = {};

  [...Array(num).keys()].map((_, index) => {
    const idx = index + 1;

    sections[`section${idx}Title`] = {
      type: ControlType.String,
      title: `${idx} - Title`,
      defaultValue: `${tempTitle} - ${idx}`,
      hidden: (props) => props.numSections < idx,
    };

    sections[`section${idx}Content`] = {
      type: ControlType.String,
      title: `${idx} - Content`,
      defaultValue: tempContent,
      hidden: (props) => props.numSections < idx,
    };

    // TODO: Perhaps someday we can include a version of the accordion that allows for Components as content
  });

  return sections;
};

const controls: object = {
  allowMultiple: {
    type: ControlType.Boolean,
    title: 'Allow multiple',
    defaultValue: false,
  },
  allowToggle: {
    type: ControlType.Boolean,
    title: 'Allow toggle',
    defaultValue: false,
  },
  numSections: {
    type: ControlType.Number,
    title: '# of Sections',
    defaultValue: 2,
    min: 1,
    max: maxNumSections,
    step: 1,
    displayStepper: true,
  },
  ...genSections(maxNumSections),
};

addPropertyControls(Accordion, controls);
