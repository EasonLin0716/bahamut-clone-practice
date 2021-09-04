import MainFormList from "./MainForumList";
import MainForumTop from "./MainForumTop";
import GreaterLinkGroup from "../UI/Link/GreaterLinkGroup";
export default function MainFormSection(props) {
  const { items } = props;
  return (
    <div className="pb-1.25 pl-2.5 pt-2.5 pr-2.5 border-l border-r border-b border-gray-250">
      <MainForumTop />
      <div className="flex gap-3.5">
        <MainFormList items={items.slice(0, 10)} />
        <MainFormList items={items.slice(10, 20)} />
      </div>
      <div className="text-right mt-1.25">
        <GreaterLinkGroup href="https://www.google.com">
          看更多
        </GreaterLinkGroup>
      </div>
    </div>
  );
}
