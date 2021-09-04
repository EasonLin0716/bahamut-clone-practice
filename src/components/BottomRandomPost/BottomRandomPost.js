import {
  randomID,
  randomFakeImgPl,
  randomTitle,
  randomTopic,
  randomNumber,
} from "../../assets/js/randomize";
import BottomRandomPostCard from "./BottomRandomPostCard";
const bottomRandomPostFactory = (length = 6) =>
  Array.from({ length }, () => ({
    id: randomID(),
    imgSrc: randomFakeImgPl(),
    title: randomTitle(12),
    topic: randomTopic(),
    likes: randomNumber(5, 9),
    replies: randomNumber(1, 5),
  }));
const mockData = {
  left: bottomRandomPostFactory(),
  mid: bottomRandomPostFactory(),
  right: bottomRandomPostFactory(),
};

export default function BottomRandomPost() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        {mockData.left.map((item) => (
          <BottomRandomPostCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {mockData.mid.map((item) => (
          <BottomRandomPostCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {mockData.right.map((item) => (
          <BottomRandomPostCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
