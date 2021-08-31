import { useState } from "react";
import GreaterLink from "../UI/Link/GreaterLinkGroup";
import VideoCard from "../UI/Card/VideoCard";
import {
  randomID,
  randomTag,
  randomTitle,
  randomImg,
} from "../../assets/js/randomize";
import { Tabs, TabList, TabPanel } from "react-tabs";
import HoverTab from "../UI/Tabs/HoverTab.js";
const streamLobbyFactory = (length = 6) =>
  Array.from({ length }, () => ({
    id: randomID(),
    title: randomTitle(),
    imgSrc: randomImg(),
    theme: randomTag(),
  }));
const mockData = streamLobbyFactory();
export default function StreamLobby() {
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
              實況大廳
            </HoverTab>
          </TabList>
          <TabPanel>
            <div className="border-l border-r border-b border-gray-250 pt-2.5  ">
              <div className="flex gap-2 my-2.5 px-1">
                {mockData.slice(0, 3).map((item) => (
                  <VideoCard item={item} />
                ))}
              </div>
              <div className="border-t border-gray-250"></div>
              <div className="flex gap-2 my-2.5 px-1">
                {mockData.slice(3, 6).map((item) => (
                  <VideoCard item={item} />
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
