import SeparateLine from "../SeparateLine/SeparateLine";
import GreaterLink from "../UI/Link/GreaterLinkGroup";
export default function MainTopicSection(props) {
  const { items } = props;
  return (
    <div className="border-gray-250 border-l border-b border-r pt-2.5 pl-2.5 pr-2.5 pb-1.25">
      <div className="main-topic-section__grid bg-gray-550 text-gray-350">
        <img
          src="/icon/new_icon1.gif"
          className="pt-2.75 pl-1.25 pr-1.25 pb-1.25 "
          alt=""
        />
        <span className="p-1.25">哈啦板</span>
        <span className="p-1.25">話題</span>
        <span className="p-1.25">迴響</span>
      </div>
      {items.map((item) => (
        <div key={item.id}>
          <div className="main-topic-section__grid">
            <span className="p-1.25 text-bahamut-numberGreen">
              {item.ranking}
            </span>
            <a
              href="https://www.google.com"
              className=" p-1.25 text-gray-350 hover:text-bahamut-linkBlue hover:underline"
            >
              {item.topic}
            </a>
            <a
              href="https://www.google.com"
              className="p-1.25 text-gray-350 hover:text-bahamut-linkBlue hover:underline"
            >
              {item.title}
            </a>
            <span className="p-1.25 text-gray-350 justify-self-end">
              {item.views}
            </span>
          </div>
          <SeparateLine />
        </div>
      ))}
      <div className="pt-1.25 text-right">
        <GreaterLink>申請新版</GreaterLink>
        <GreaterLink>前往哈啦區</GreaterLink>
      </div>
    </div>
  );
}
