import Title from "../UI/Title/Title.js";
import WelfareAgencyItem from "./WelfareAgencyItem.js";
import SeparateLine from "../SeparateLine/SeparateLine.js";
const mockData = [
  {
    id: 1,
    imgSrc: "/bahamut-clone-practice/img/01.jpg",
    tag: "勇者任務",
    content: "重點情報揭密《二之國：交錯世界》攻略影片搶先看！",
  },
  {
    id: 2,
    imgSrc: "/bahamut-clone-practice/img/02.jpg",
    tag: "抽抽樂",
    content: "重點情報揭密《二之國：交錯世界》攻略影片搶先看！",
  },
  {
    id: 3,
    imgSrc: "/bahamut-clone-practice/img/03.jpg",
    tag: "抽抽樂",
    content: "重點情報揭密《二之國：交錯世界》攻略影片搶先看！",
  },
  {
    id: 4,
    imgSrc: "/bahamut-clone-practice/img/04.jpg",
    tag: "抽抽樂",
    content: "重點情報揭密《二之國：交錯世界》攻略影片搶先看！",
  },
  {
    id: 5,
    imgSrc: "/bahamut-clone-practice/img/05.jpg",
    tag: "抽抽樂",
    content: "重點情報揭密《二之國：交錯世界》攻略影片搶先看！",
  },
];
export default function WelfareAgency() {
  const welfareAgencyTitle = "勇者福利社";
  return (
    <div className="sticky top-1.25">
      <Title text={welfareAgencyTitle} />
      <div className="border border-t-0 border-gray-250 py-1.25 px-2.5">
        {mockData.map((item, index) => (
          <div key={index}>
            <WelfareAgencyItem
              imgSrc={item.imgSrc}
              tag={item.tag}
              content={item.content}
            />
            <SeparateLine />
          </div>
        ))}
      </div>
    </div>
  );
}
