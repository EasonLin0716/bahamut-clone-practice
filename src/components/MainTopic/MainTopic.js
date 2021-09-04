import { useState } from "react";
import {
  randomID,
  randomName,
  randomNumber,
  randomTitle,
  randomCategory,
} from "../../assets/js/randomize";
import { Tabs, TabList, TabPanel } from "react-tabs";
import HoverTab from "../UI/Tabs/HoverTab";
import MainTopicSection from "./MainTopicSection";
const tabs = ["熱門話題", "遊戲話題", "動漫話題"];
const mainTopicFactory = (length = 20) =>
  Array.from({ length }, () => ({
    id: randomID(),
    topic: randomName(),
    title: `【${randomCategory()}】${randomTitle(15)}`,
    views: randomNumber(10, 100),
  }))
    .sort((a, b) => b.views - a.views)
    .map((item, index) => ({ ...item, ranking: index + 1 }));
const mockData = Array.from({ length: tabs.length }, () => mainTopicFactory());
export default function MainTopic() {
  const [tabIndex, setTabIndex] = useState(0);
  let timer = null;
  const handleHover = (index) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setTabIndex(index);
    }, 200);
  };
  return (
    <div className="tab-default">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          {tabs.map((item, index) => (
            <HoverTab
              key={index}
              isActive={tabIndex === index}
              onHover={() => handleHover(index)}
            >
              {item}
            </HoverTab>
          ))}
        </TabList>
        {mockData.map((arrayData, index) => (
          <TabPanel key={index}>
            <MainTopicSection items={arrayData} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
