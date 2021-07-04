import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./onSaleProductTabs.css";
export default function OnSaleProductionTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>PC</Tab>
        <Tab>TV</Tab>
        <Tab>動畫</Tab>
        <Tab>其他</Tab>
      </TabList>
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
      <TabPanel>Content 4</TabPanel>
    </Tabs>
  );
}
