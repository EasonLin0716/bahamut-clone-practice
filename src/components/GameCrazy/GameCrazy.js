import { useState } from "react";
import GreaterLink from "../UI/Link/GreaterLinkGroup";
import VideoCard from "../UI/Card/VideoCard";
import {
  randomID,
  randomNumber,
  randomTitle,
  randomImg,
} from "../../assets/js/randomize";
import { Tabs, TabList, TabPanel } from "react-tabs";
import HoverTab from "../UI/Tabs/HoverTab.js";
import "./gameCrazy.css";
const gameCrazyFactory = (length = 3) =>
  Array.from({ length }, () => ({
    id: randomID(),
    title: randomTitle(),
    imgSrc: randomImg(),
    views: randomNumber(),
  }));
const mockData = gameCrazyFactory();
export default function GameCrazy() {
  const [tabIndex, setTabIndex] = useState(0);
  let timer = null;
  const handleHover = (index) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setTabIndex(index);
    }, 200);
  };
  return (
    <>
      <div className="tab-default">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <HoverTab isActive={tabIndex === 0} onHover={() => handleHover(0)}>
              電玩瘋
            </HoverTab>
          </TabList>
          <TabPanel>
            <div className="border-l border-r border-b border-gray-250 pt-2.5 px-1 ">
              <div className="flex gap-2">
                {mockData.map((item) => (
                  <VideoCard key={item.id} item={item} />
                ))}
              </div>
              <hr className="mx-1" />
              <div className="my-1.25 mx-2 text-right">
                <GreaterLink href="https://www.google.com">看更多</GreaterLink>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
