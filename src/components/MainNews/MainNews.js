import MainNewsCard from "./MainNewsCard";
import randomID from "../../assets/css/js/randomID";
const mockData = {
  news: [
    {
      id: randomID(),
      title:
        "路呢歌裝蝶寸抓安雨枝玩遠媽兆，飽娘女民圓路工尾可大急己乍。皮像又主",
      imgSrc: "/img/01.jpg",
      href: "https://www.google.com/",
      tag: "PC",
    },
    {
      id: randomID(),
      title: "中校做跟歡，門消苦地少弓畫孝民院衣夕京跟田",
      imgSrc: "/img/02.jpg",
      href: "https://www.google.com/",
      tag: "手機",
    },
    {
      id: randomID(),
      title: "聽神掃實心高，西實風、嗎二雲兔跳要東良內嗎造二九刀河紅北念士消",
      imgSrc: "/img/03.jpg",
      href: "https://www.google.com/",
      tag: "NS",
    },
    {
      id: randomID(),
      title: "原相送久尼朋經他左完爸元化姊巾冰游京五？丟京是朋能",
      imgSrc: "/img/04.jpg",
      href: "https://www.google.com/",
      tag: "多平台",
    },
    {
      id: randomID(),
      title:
        "路呢歌裝蝶寸抓安雨枝玩遠媽兆，飽娘女民圓路工尾可大急己乍。皮像又主",
      imgSrc: "/img/05.jpg",
      href: "https://www.google.com/",
      tag: "PC",
    },
    {
      id: randomID(),
      title: "中校做跟歡，門消苦地少弓畫孝民院衣夕京跟田",
      imgSrc: "/img/06.jpg",
      href: "https://www.google.com/",
      tag: "手機",
    },
    {
      id: randomID(),
      title: "聽神掃實心高，西實風、嗎二雲兔跳要東良內嗎造二九刀河紅北念士消",
      imgSrc: "/img/07.jpg",
      href: "https://www.google.com/",
      tag: "NS",
    },
    {
      id: randomID(),
      title: "原相送久尼朋經他左完爸元化姊巾冰游京五？丟京是朋能",
      imgSrc: "/img/08.jpg",
      href: "https://www.google.com/",
      tag: "多平台",
    },
    {
      id: randomID(),
      title:
        "路呢歌裝蝶寸抓安雨枝玩遠媽兆，飽娘女民圓路工尾可大急己乍。皮像又主",
      imgSrc: "/img/09.jpg",
      href: "https://www.google.com/",
      tag: "PC",
    },
    {
      id: randomID(),
      title: "中校做跟歡，門消苦地少弓畫孝民院衣夕京跟田",
      imgSrc: "/img/10.jpg",
      href: "https://www.google.com/",
      tag: "手機",
    },
    {
      id: randomID(),
      title: "聽神掃實心高，西實風、嗎二雲兔跳要東良內嗎造二九刀河紅北念士消",
      imgSrc: "/img/11.jpg",
      href: "https://www.google.com/",
      tag: "NS",
    },
    {
      id: randomID(),
      title: "原相送久尼朋經他左完爸元化姊巾冰游京五？丟京是朋能",
      imgSrc: "/img/12.jpg",
      href: "https://www.google.com/",
      tag: "多平台",
    },
  ],
};
export default function MainNews() {
  return (
    <div className="border-t border-l border-r border-gray-250">
      <div className="flex justify-between px-1 py-1.75 gap-2 border-b border-gray-250">
        {mockData.news.slice(0, 4).map((item) => (
          <MainNewsCard key={item.id} item={item}></MainNewsCard>
        ))}
      </div>
      <div className="flex justify-between px-1 py-1.75 gap-2 border-b border-gray-250">
        {mockData.news.slice(4, 8).map((item) => (
          <MainNewsCard key={item.id} item={item}></MainNewsCard>
        ))}
      </div>
      <div className="flex justify-between px-1 py-1.75 gap-2 border-b border-gray-250">
        {mockData.news.slice(8, 12).map((item) => (
          <MainNewsCard key={item.id} item={item}></MainNewsCard>
        ))}
      </div>
    </div>
  );
}
