import { useState } from "react";
import MainNewsTabPanel from "./MainNewsTabPanel";
import MainNewsInfo from "./MainNewsInfo";
import GreaterLink from "../UI/Link/GreaterLinkGroup";
import {
  randomID,
  randomTitle,
  randomImg,
  randomTag,
  randomBoolean,
} from "../../assets/js/randomize";
import { Tabs, TabList, TabPanel } from "react-tabs";
import HoverTab from "../UI/Tabs/HoverTab.js";
const itemsFactory = (length = 8) =>
  Array.from({ length }, () => ({
    id: randomID(),
    title: randomTitle(),
    imgSrc: randomImg(),
    href: "https://www.google.com/",
    tag: randomTag(),
    hasVideo: randomBoolean(),
    isContributed: randomBoolean(),
  }));

const mockData = {
  news: itemsFactory(),
  mobileGame: itemsFactory(),
  pc: itemsFactory(),
  tvGame: itemsFactory(),
  acg: itemsFactory(),
  game: itemsFactory(),
  GC: itemsFactory(),
  topic: itemsFactory(),
  info: itemsFactory(12),
};
export default function MainNews() {
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
          <HoverTab isActive={tabIndex === 0} onHover={() => handleHover(0)}>
            GNN 新聞
          </HoverTab>
          <HoverTab isActive={tabIndex === 1} onHover={() => handleHover(1)}>
            手機
          </HoverTab>
          <HoverTab isActive={tabIndex === 2} onHover={() => handleHover(2)}>
            PC
          </HoverTab>
          <HoverTab isActive={tabIndex === 3} onHover={() => handleHover(3)}>
            TV 掌機
          </HoverTab>
          <HoverTab isActive={tabIndex === 4} onHover={() => handleHover(4)}>
            動漫畫
          </HoverTab>
          <HoverTab isActive={tabIndex === 5} onHover={() => handleHover(5)}>
            電競
          </HoverTab>
          <HoverTab isActive={tabIndex === 6} onHover={() => handleHover(6)}>
            GC 2021
          </HoverTab>
          <HoverTab isActive={tabIndex === 7} onHover={() => handleHover(7)}>
            主題報導
          </HoverTab>
        </TabList>
        <TabPanel>
          <MainNewsTabPanel items={mockData.news} />
        </TabPanel>
        <TabPanel>
          <MainNewsTabPanel items={mockData.mobileGame} />
        </TabPanel>
        <TabPanel>
          <MainNewsTabPanel items={mockData.pc} />
        </TabPanel>
        <TabPanel>
          <MainNewsTabPanel items={mockData.tvGame} />
        </TabPanel>
        <TabPanel>
          <MainNewsTabPanel items={mockData.acg} />
        </TabPanel>
        <TabPanel>
          <MainNewsTabPanel items={mockData.game} />
        </TabPanel>
        <TabPanel>
          <MainNewsTabPanel items={mockData.GC} />
        </TabPanel>
        <TabPanel>
          <MainNewsTabPanel items={mockData.topic} />
        </TabPanel>
      </Tabs>
      <div className="pt-2.5 pb-1.25 px-2.5 border-r border-b border-l border-gray-250">
        <MainNewsInfo items={mockData.info} />
        <div className="pt-1.25 flex justify-end gap-3.75">
          <GreaterLink href="https://www.google.com">投稿</GreaterLink>
          <GreaterLink href="https://www.google.com">更多新聞</GreaterLink>
        </div>
      </div>
    </div>
  );
}
