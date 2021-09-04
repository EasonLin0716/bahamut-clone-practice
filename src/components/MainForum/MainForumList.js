import NumberTag from "../UI/Tag/NumberTag";
import MainForumHeading from "./MainForumHeading";
import SeparateLine from "../SeparateLine/SeparateLine";
export default function MainFormList(props) {
  const { items } = props;
  return (
    <div className="flex-grow">
      <MainForumHeading />
      <div>
        {items.map((item, index) => (
          <div key={item.id}>
            <div key={item.id} className="flex justify-between py-1.25">
              <div>
                <NumberTag>{item.ranking}</NumberTag>
                <a
                  className="pl-1.25 text-gray-350 hover:text-bahamut-linkBlue hover:underline"
                  href="https://www.google.com"
                >
                  {item.name}
                </a>
              </div>
              <span className="text-gray-350">{item.views}</span>
            </div>
            <SeparateLine></SeparateLine>
          </div>
        ))}
      </div>
    </div>
  );
}
