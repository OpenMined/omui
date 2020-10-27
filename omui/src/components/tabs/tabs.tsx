import React from 'react';
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabsProps as ITabsProps
} from '@chakra-ui/core';

type Tab = {
  label: string;
  content: string | React.ReactNode;
  selected?: boolean;
};

type TabsProps = ITabsProps & {
  tabs: Tab[];
};

const Tabs = ({ tabs, children, ...props }: TabsProps) => {
  let defaultIndex;

  if (tabs) {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].selected) {
        defaultIndex = i;
        break;
      }
    }
  }

  return (
    <ChakraTabs {...props} defaultIndex={defaultIndex}>
      {tabs ? (
        <>
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
        </>
      ) : (
        children
      )}
    </ChakraTabs>
  );
};

export { Tabs, Tab, TabList, TabPanel, TabPanels };
