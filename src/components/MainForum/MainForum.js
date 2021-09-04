import { useState } from "react";
import { randomID, randomName, randomNumber } from "../../assets/js/randomize";
import { Tabs, TabList, TabPanel } from "react-tabs";
import HoverTab from "../UI/Tabs/HoverTab";
import MainFormSection from "./MainForumSection";
const tabs = ["熱門看板", "手機", "PC", "TV掌機", "動漫畫", "主題", "場外"];
const mainForumFactory = (length = 20) =>
  Array.from({ length }, () => ({
    id: randomID(),
    name: randomName(),
    views: randomNumber(100000),
  }))
    .sort((a, b) => b.views - a.views)
    .map((item, index) => ({ ...item, ranking: index + 1 }));
const mockData = Array.from({ length: tabs.length }, () => mainForumFactory());

export default function MainForum() {
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
            <MainFormSection items={arrayData} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
