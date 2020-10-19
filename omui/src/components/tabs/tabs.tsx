import React from 'react';
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/core';

type Tab = {
  label: string;
  content: string | React.ReactNode;
  selected?: boolean;
};

type TabProps = {
  tabs: Tab[];
};

export const Tabs = ({ tabs, ...props }: TabProps) => {
  let defaultIndex;

  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].selected) {
      defaultIndex = i;
      break;
    }
  }

  return (
    <ChakraTabs {...props} defaultIndex={defaultIndex}>
      <TabList>
        {tabs.map(({ label, ...tab }) => (
          <Tab key={label} {...tab}>
            {label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map(({ label, content, ...tab }) => (
          <TabPanel key={label} {...tab}>
            {content}
          </TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
};
