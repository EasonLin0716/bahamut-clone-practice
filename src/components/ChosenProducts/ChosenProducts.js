import Title from "../Title/Title.js";
const mockData = [
  {
    id: 1,
    imgSrc: "/img/01.jpg",
    title: "集童我高文個",
    content: "他分一等包長計院",
    link: "https://www.google.com",
  },
  {
    id: 2,
    imgSrc: "/img/02.jpg",
    title: "示子兒持化謝",
    content: "不路病充代新城",
    link: "https://www.google.com",
  },
  {
    id: 3,
    imgSrc: "/img/03.jpg",
    title: "出人關北求一",
    content: "上二時表的望金任",
    link: "https://www.google.com",
  },
];
export default function ChosenProducts() {
  const chosenProductsTitle = "精選商品";
  return (
    <div>
      <Title text={chosenProductsTitle} />
      <div className="pb-1.25"></div>
      <div className="flex flex-col gap-2.5">
        {mockData.map((item, index) => (
          <div key={index}>
            <img className="h-45 w-45 object-cover" src={item.imgSrc} alt="" />
            <div className="mt-1.25 border-b border-l border-r rounded-b-5  border-gray-250">
              <a
                href={item.link}
                className="block text-bahamut-linkBlue hover:underline my-0.75 text-tiny text-center"
              >
                {item.title} <br />
                {item.content}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
