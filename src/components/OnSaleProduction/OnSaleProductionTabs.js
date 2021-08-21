import { useState } from "react";
import { Tabs, TabList, TabPanel } from "react-tabs";
import HoverTab from "../UI/Tabs/HoverTab.js";
import "./onSaleProductTabs.css";
import OnSaleProductionTabsPC from "./OnSaleProductionTabsPC.js";
import OnSaleProductionTabsTV from "./OnSaleProductionTabsTV.js";
import OnSaleProductionTabsAnime from "./OnSaleProductionTabsAnime.js";
import OnSaleProductionTabsOther from "./OnSaleProductionTabsOther.js";
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
  tvData: [
    {
      id: 1,
      title: "市建石加覺明",
      link: "https://www.google.com",
      type: "Switch",
      date: "07.08",
    },
    {
      id: 2,
      title: "公這那走回落",
      link: "https://www.google.com",
      type: "PS5",
      date: "07.08",
    },
    {
      id: 3,
      title: "作訴稱景排夫",
      link: "https://www.google.com",
      type: "Switch",
      date: "07.07",
    },
    {
      id: 4,
      title: "趣賽有風是心",
      link: "https://www.google.com",
      type: "Switch",
      date: "07.07",
    },
    {
      id: 5,
      title: "接的行一們",
      link: "https://www.google.com",
      type: "Switch",
      date: "07.07",
    },
    {
      id: 6,
      title: "小夠引觀美產充",
      link: "https://www.google.com",
      type: "PS5",
      date: "07.07",
    },
    {
      id: 7,
      title: "動得了種案一",
      link: "https://www.google.com",
      type: "XboxSX",
      date: "07.06",
    },
    {
      id: 8,
      title: "經人以現但紅如",
      link: "https://www.google.com",
      type: "PS5",
      date: "07.06",
    },
    {
      id: 9,
      title: "中早質有部向",
      link: "https://www.google.com",
      type: "PS4",
      date: "07.06",
    },
    {
      id: 10,
      title: "國印大酒有",
      link: "https://www.google.com",
      type: "Switch",
      date: "07.06",
    },
  ],
  animeData: [
    {
      id: 1,
      title: "市建石加覺明",
      link: "https://www.google.com",
      date: "07.08",
    },
    {
      id: 2,
      title: "公這那走回落",
      link: "https://www.google.com",
      date: "07.08",
    },
    {
      id: 3,
      title: "作訴稱景排夫",
      link: "https://www.google.com",
      date: "07.07",
    },
    {
      id: 4,
      title: "趣賽有風是心",
      link: "https://www.google.com",
      date: "07.07",
    },
    {
      id: 5,
      title: "接的行一們",
      link: "https://www.google.com",
      date: "07.07",
    },
    {
      id: 6,
      title: "小夠引觀美產充",
      link: "https://www.google.com",
      date: "07.07",
    },
    {
      id: 7,
      title: "動得了種案一",
      link: "https://www.google.com",
      date: "07.06",
    },
    {
      id: 8,
      title: "經人以現但紅如",
      link: "https://www.google.com",
      date: "07.06",
    },
    {
      id: 9,
      title: "中早質有部向",
      link: "https://www.google.com",
      date: "07.06",
    },
    {
      id: 10,
      title: "國印大酒有",
      link: "https://www.google.com",
      date: "07.06",
    },
  ],
  otherData: [
    {
      id: 1,
      title: "接的行一們",
      link: "https://www.google.com",
      type: "輕小說",
      date: "07.07",
    },
    {
      id: 2,
      title: "小夠引觀美",
      link: "https://www.google.com",
      type: "漫畫",
      date: "07.07",
    },
    {
      id: 3,
      title: "動得了種案一",
      link: "https://www.google.com",
      type: "漫畫",
      date: "07.06",
    },
  ],
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
        {mockData.pcData.map((item, index) => (
          <div key={item.id} className="mb-1.5">
            <OnSaleProductionTabsPC item={item} />
            {index < mockData.pcData.length - 1 && <SeparateLine />}
          </div>
        ))}
      </TabPanel>
      <TabPanel>
        {mockData.tvData.map((item, index) => (
          <div key={item.id} className="mb-1.5">
            <OnSaleProductionTabsTV item={item} />
            {index < mockData.tvData.length - 1 && <SeparateLine />}
          </div>
        ))}
      </TabPanel>
      <TabPanel>
        {mockData.animeData.map((item, index) => (
          <div key={item.id} className="mb-1.5">
            <OnSaleProductionTabsAnime item={item} />
            {index < mockData.animeData.length - 1 && <SeparateLine />}
          </div>
        ))}
      </TabPanel>
      <TabPanel>
        {mockData.otherData.map((item, index) => (
          <div key={item.id} className="mb-1.5">
            <OnSaleProductionTabsOther item={item} />
            {index < mockData.otherData.length - 1 && <SeparateLine />}
          </div>
        ))}
      </TabPanel>
    </Tabs>
  );
}
