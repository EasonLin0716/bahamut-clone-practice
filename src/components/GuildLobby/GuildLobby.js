import { useState } from "react";
import NumberTag from "../UI/Tag/NumberTag";
import SeparateLine from "../SeparateLine/SeparateLine";
import {
  randomID,
  randomTitle,
  randomNumber,
  randomImg,
} from "../../assets/js/randomize";
import { Tabs, TabList, TabPanel } from "react-tabs";
import HoverTab from "../UI/Tabs/HoverTab";
import GreaterLink from "../UI/Link/GreaterLinkGroup";

const guildLobbyFactory = (length = 10) =>
  Array.from({ length }, () => ({
    id: randomID(),
    title: randomTitle(7),
  }));
const mockWikiGuildData = guildLobbyFactory();
const mockRecommendedGuildData = guildLobbyFactory(2).map((item) => ({
  ...item,
  imgSrc: randomImg(),
  description: randomTitle(15),
}));
const mockHotGuildData = guildLobbyFactory().map((item) => ({
  ...item,
  views: randomNumber(1000, 20000),
}));

export default function GuildLobby() {
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
            熱門Wiki
          </HoverTab>
          <HoverTab isActive={tabIndex === 1} onHover={() => handleHover(1)}>
            推薦公會
          </HoverTab>
          <HoverTab isActive={tabIndex === 2} onHover={() => handleHover(2)}>
            熱門公會
          </HoverTab>
        </TabList>
        <TabPanel>
          <div className="pt-2.5 pl-2.5 pr-2.5 pb-1.25 border-l border-r border-b border-gray-250">
            <div className="grid grid-cols-2 gap-x-6">
              {mockWikiGuildData.map((item, index) => (
                <div key={item.id}>
                  <div className="flex py-1.75">
                    <NumberTag>
                      {index % 2 === 0
                        ? (index / 2 + 1) | 0
                        : Math.ceil((index + 10) / 2)}
                    </NumberTag>
                    <a
                      href="https://www.google.com"
                      className="pl-1.25 text-base text-gray-350 hover:text-bahamut-blue"
                    >
                      {item.title}
                    </a>
                  </div>
                  <SeparateLine />
                </div>
              ))}
            </div>
            <div className="text-right mt-1.25">
              <GreaterLink href="https://www.google.com">公會大廳</GreaterLink>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="pt-2.5 pl-2.5 pr-2.5 pb-1.25 border-l border-r border-b border-gray-250">
            <div className=" grid grid-cols-2 mb-2.5">
              {mockRecommendedGuildData.map((item, index) => (
                <div key={item.id} className="flex justify-between gap-1.25">
                  <img
                    src={item.imgSrc}
                    className="w-45 h-45 object-cover"
                    alt="guild"
                  />
                  <div>
                    <a
                      href="https://www.google.com"
                      className="text-bahamut-linkBlue font-bold hover:underline py-0.75"
                    >
                      {item.title}
                    </a>
                    <SeparateLine />
                    <p className="mt-1.25 text-gray-350">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <SeparateLine />
            <div className="text-right mt-1.25">
              <GreaterLink href="https://www.google.com">公會大廳</GreaterLink>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="pt-2.5 pl-2.5 pr-2.5 pb-1.25 border-l border-r border-b border-gray-250">
            <div className="grid grid-cols-2 gap-x-6">
              {mockHotGuildData.map((item, index) => (
                <div key={item.id}>
                  <div className="flex justify-between items-center">
                    <div className="flex py-1.75">
                      <NumberTag>
                        {index % 2 === 0
                          ? (index / 2 + 1) | 0
                          : Math.ceil((index + 10) / 2)}
                      </NumberTag>
                      <a
                        href="https://www.google.com"
                        className="pl-1.25 text-base text-gray-350 hover:text-bahamut-blue"
                      >
                        {item.title}
                      </a>
                    </div>
                    <span className="text-gray-350">{item.views}</span>
                  </div>

                  <SeparateLine />
                </div>
              ))}
            </div>
            <div className="text-right mt-1.25">
              <GreaterLink href="https://www.google.com">公會大廳</GreaterLink>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
