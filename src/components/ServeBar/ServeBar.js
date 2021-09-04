import ServeBarLink from "./ServeBarLink.js";
import SeparateLine from "../SeparateLine/SeparateLine.js";
const mockData = [
  {
    id: 1,
    icon: "/bahamut-clone-practice/icon/01.png",
    title: "GNN新聞",
    link: "https://www.google.com",
  },
  {
    id: 2,
    icon: "/bahamut-clone-practice/icon/02.png",
    title: "哈啦區",
    link: "https://www.google.com",
  },
  {
    id: 3,
    icon: "/bahamut-clone-practice/icon/03.png",
    title: "哈哈姆特不EY",
    link: "https://www.google.com",
  },

  {
    id: 4,
    icon: "/bahamut-clone-practice/icon/04.png",
    title: "動態牆",
    link: "https://www.google.com",
  },

  {
    id: 5,
    icon: "/bahamut-clone-practice/icon/05.png",
    title: "電玩瘋",
    link: "https://www.google.com",
  },

  {
    id: 6,
    icon: "/bahamut-clone-practice/icon/06.png",
    title: "動畫瘋",
    link: "https://www.google.com",
  },

  {
    id: 7,
    icon: "/bahamut-clone-practice/icon/07.png",
    title: "創作大廳",
    link: "https://www.google.com",
  },

  {
    id: 8,
    icon: "/bahamut-clone-practice/icon/08.png",
    title: "實況大廳",
    link: "https://www.google.com",
  },

  {
    id: 9,
    icon: "/bahamut-clone-practice/icon/09.png",
    title: "公會大廳",
    link: "https://www.google.com",
  },

  {
    id: 10,
    icon: "/bahamut-clone-practice/icon/10.png",
    title: "勇者造型",
    link: "https://www.google.com",
  },

  {
    id: 11,
    icon: "/bahamut-clone-practice/icon/11.png",
    title: "巴哈商城",
    link: "https://www.google.com",
  },

  {
    id: 12,
    icon: "/bahamut-clone-practice/icon/12.png",
    title: "勇者福利社",
    link: "https://www.google.com",
  },

  {
    id: 13,
    icon: "/bahamut-clone-practice/icon/13.png",
    title: "ＡＰＰ",
    link: "https://www.google.com",
  },

  {
    id: 14,
    icon: "/bahamut-clone-practice/icon/14.png",
    title: "ACG創作大賽",
    link: "https://www.google.com",
  },

  {
    id: 15,
    icon: "/bahamut-clone-practice/icon/15.png",
    title: "會員中心",
    link: "https://www.google.com",
  },
];
export default function ServeBar() {
  return (
    <ul className="border border-gray-250">
      {mockData.map((item, index) => (
        <li key={index} className="block ml-2.5 pt-1.25 mr-1.25 ">
          <ServeBarLink icon={item.icon} title={item.title} link={item.link} />
          <SeparateLine />
        </li>
      ))}
    </ul>
  );
}
