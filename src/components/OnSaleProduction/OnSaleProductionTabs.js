import { useState } from "react";
import { Tabs, TabList, TabPanel } from "react-tabs";
import HoverTab from "../Tabs/HoverTab.js";
import "./onSaleProductTabs.css";
import OnSaleProductionTabsPC from "./OnSaleProductionTabsPC.js";
import SeparateLine from "../SeparateLine/SeparateLine.js";
const mockData = {
  pcData: [
    {
      id: 1,
      title: "市建石加覺明",
      link: "https://www.google.com",
      type: "WEB",
      date: "07.08",
    },
    {
      id: 2,
      title: "公這那走回落",
      link: "https://www.google.com",
      type: "單機",
      date: "07.08",
    },
    {
      id: 3,
      title: "作訴稱景排夫",
      link: "https://www.google.com",
      type: "WEB",
      date: "07.07",
    },
    {
      id: 4,
      title: "趣賽有風是心",
      link: "https://www.google.com",
      type: "WEB",
      date: "07.07",
    },
    {
      id: 5,
      title: "接的行一們",
      link: "https://www.google.com",
      type: "WEB",
      date: "07.07",
    },
    {
      id: 6,
      title: "小夠引觀美產充",
      link: "https://www.google.com",
      type: "單機",
      date: "07.07",
    },
    {
      id: 7,
      title: "動得了種案一",
      link: "https://www.google.com",
      type: "單機",
      date: "07.06",
    },
    {
      id: 8,
      title: "經人以現但紅如",
      link: "https://www.google.com",
      type: "單機",
      date: "07.06",
    },
    {
      id: 9,
      title: "中早質有部向",
      link: "https://www.google.com",
      type: "單機",
      date: "07.06",
    },
    {
      id: 10,
      title: "國印大酒有",
      link: "https://www.google.com",
      type: "WEB",
      date: "07.06",
    },
  ],
  tvData: [],
  animeData: [],
  otherData: [],
};
export default function OnSaleProductionTabs() {
  const [tabIndex, setTabIndex] = useState(0);
  let timer = null;
  const handleHover = (index) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setTabIndex(index);
    }, 200);
  };

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <HoverTab isActive={tabIndex === 0} onHover={() => handleHover(0)}>
          PC
        </HoverTab>
        <HoverTab isActive={tabIndex === 1} onHover={() => handleHover(1)}>
          TV
        </HoverTab>
        <HoverTab isActive={tabIndex === 2} onHover={() => handleHover(2)}>
          動畫
        </HoverTab>
        <HoverTab isActive={tabIndex === 3} onHover={() => handleHover(3)}>
          其他
        </HoverTab>
      </TabList>
      <TabPanel>
        {mockData.pcData.map((item) => (
          <div key={item.id} className="mb-1.5">
            <OnSaleProductionTabsPC item={item} />
            <SeparateLine />
          </div>
        ))}
      </TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
      <TabPanel>Content 4</TabPanel>
    </Tabs>
  );
}
