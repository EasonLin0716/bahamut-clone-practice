import { useState } from "react";
import {
  randomID,
  randomTitle,
  randomPercentage,
} from "../../assets/js/randomize";
import { Tabs, TabList, TabPanel } from "react-tabs";
import HoverTab from "../UI/Tabs/HoverTab";
import NumberTag from "../UI/Tag/NumberTag";
import SeparateLine from "../SeparateLine/SeparateLine";
const androidGameRankingFactory = ({
  length = 10,
  minPercentage = 0,
  maxPercentage = 99,
}) =>
  Array.from({ length }, () => ({
    id: randomID(),
    title: randomTitle(7),
    percentage: randomPercentage(minPercentage, maxPercentage),
  }));
const mockGrownData = androidGameRankingFactory({ maxPercentage: 0.1 });
const mockInstallData = androidGameRankingFactory({
  minPercentage: 5,
  maxPercentage: 25,
});
export default function AndroidGameRanking() {
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
            Android 成長榜
          </HoverTab>
          <HoverTab isActive={tabIndex === 1} onHover={() => handleHover(1)}>
            Android 安裝榜
          </HoverTab>
        </TabList>
        <TabPanel>
          <div className="android-game-ranking__wrapper">
            {mockGrownData.map((item, index) => (
              <div key={item.id}>
                <div className="flex justify-between py-1.75">
                  <div>
                    <NumberTag>
                      {index % 2 === 0
                        ? (index / 2 + 1) | 0
                        : Math.ceil((index + 10) / 2)}
                    </NumberTag>
                    <a
                      href="https://www.google.com"
                      className="pl-2.5 text-base text-gray-350 hover:text-bahamut-blue"
                    >
                      {item.title}
                    </a>
                  </div>
                  <div>
                    <span className="inline-block text-base text-bahamut-percentageBlue w-17.5 mr-1.75">
                      <img
                        src="/bahamut-clone-practice/icon/long-arrow-alt-up-solid.svg"
                        className="h-4 inline-block mr-0.75"
                        alt="long-arrow-alt"
                      />
                      {item.percentage}
                    </span>
                    <span className="text-tiny border border-bahamut-halaGray text-bahamut-halaGray p-1 rounded-5">
                      哈啦區
                    </span>
                  </div>
                </div>
                <SeparateLine />
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 gap-x-6 pt-2.5 pl-2.5 pr-2.5 pb-4 border-l border-r border-b border-gray-250">
            {mockInstallData.map((item, index) => (
              <div key={item.id}>
                <div className="flex justify-between py-1.75">
                  <div>
                    <NumberTag>
                      {index % 2 === 0
                        ? (index / 2 + 1) | 0
                        : Math.ceil((index + 10) / 2)}
                    </NumberTag>
                    <a
                      href="https://www.google.com"
                      className="pl-2.5 text-base text-gray-350 hover:text-bahamut-blue"
                    >
                      {item.title}
                    </a>
                  </div>
                  <div>
                    <span className="inline-block text-base text-bahamut-percentageBlue w-17.5 mr-1.75">
                      <img
                        src="/bahamut-clone-practice/icon/child-solid.svg"
                        className="h-4 inline-block mr-0.75"
                        alt="long-arrow-alt"
                      />
                      {item.percentage}
                    </span>
                    <span className="text-tiny border border-bahamut-halaGray text-bahamut-halaGray p-1 rounded-5">
                      哈啦區
                    </span>
                  </div>
                </div>
                <SeparateLine />
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
