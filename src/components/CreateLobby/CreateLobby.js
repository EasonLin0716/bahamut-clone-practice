import { useState } from "react";
import { randomID, randomTitle, randomImg } from "../../assets/js/randomize";
import { Tabs, TabList, TabPanel } from "react-tabs";
import HoverTab from "../UI/Tabs/HoverTab";
import CreateLobbyCardSection from "./CreateLobbyCardSection";

const createLobbyFactory = (length = 8) =>
  Array.from({ length }, () => ({
    id: randomID(),
    title: randomTitle(16),
    imgSrc: randomImg(),
  }));

const mockData = {
  hot: createLobbyFactory(),
  blog: createLobbyFactory(),
  novel: createLobbyFactory(),
  painting: createLobbyFactory(),
  comic: createLobbyFactory(),
  chosen: createLobbyFactory(),
  cosplay: createLobbyFactory(),
  gossip: createLobbyFactory(),
};

export default function CreateLobby() {
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
            熱門創作
          </HoverTab>
          <HoverTab isActive={tabIndex === 1} onHover={() => handleHover(1)}>
            部落格達人
          </HoverTab>
          <HoverTab isActive={tabIndex === 2} onHover={() => handleHover(2)}>
            小說達人
          </HoverTab>
          <HoverTab isActive={tabIndex === 3} onHover={() => handleHover(3)}>
            插畫達人
          </HoverTab>
          <HoverTab isActive={tabIndex === 4} onHover={() => handleHover(4)}>
            漫畫達人
          </HoverTab>
          <HoverTab isActive={tabIndex === 5} onHover={() => handleHover(5)}>
            精選閣樓
          </HoverTab>
          <HoverTab isActive={tabIndex === 6} onHover={() => handleHover(6)}>
            Cosplay
          </HoverTab>
          <HoverTab isActive={tabIndex === 7} onHover={() => handleHover(7)}>
            八卦快報
          </HoverTab>
        </TabList>
        <TabPanel>
          <CreateLobbyCardSection items={mockData.hot} />
        </TabPanel>
        <TabPanel>
          <CreateLobbyCardSection items={mockData.blog} />
        </TabPanel>
        <TabPanel>
          <CreateLobbyCardSection items={mockData.novel} />
        </TabPanel>
        <TabPanel>
          <CreateLobbyCardSection items={mockData.painting} />
        </TabPanel>
        <TabPanel>
          <CreateLobbyCardSection items={mockData.comic} />
        </TabPanel>
        <TabPanel>
          <CreateLobbyCardSection items={mockData.chosen} />
        </TabPanel>
        <TabPanel>
          <CreateLobbyCardSection items={mockData.cosplay} />
        </TabPanel>
        <TabPanel>
          <CreateLobbyCardSection items={mockData.gossip} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
