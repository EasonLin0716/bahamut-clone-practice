import CreateLobbyCard from "./CreateLobbyCard";
import GreaterLinkGroup from "../UI/Link/GreaterLinkGroup";
import SeparateLine from "../SeparateLine/SeparateLine";

export default function CreateLobbyCardSection(props) {
  const { items } = props;
  return (
    <div className="border-r border-l border-b border-gray-250 pt-1.25">
      <div className="flex gap-1.25 border-b border-gray-250 pl-1.25">
        {items.slice(0, 4).map((item) => (
          <CreateLobbyCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex gap-1.25 mt-1.5 mb-3 pl-1.25">
        {items.slice(4, 8).map((item) => (
          <CreateLobbyCard key={item.id} item={item} />
        ))}
      </div>
      <div className="mx-2.5 px-0.25">
        <SeparateLine />
      </div>
      <div className="text-right mt-1 mb-2 mr-2.5 pr-0.25">
        <GreaterLinkGroup href="https://www.google.com">
          看更多
        </GreaterLinkGroup>
      </div>
    </div>
  );
}
