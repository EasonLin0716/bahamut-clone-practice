import Title from "../Title/Title.js";
const mockData = [
  {
    id: 1,
    imgSrc: "/img/10.jpg",
    title: "Lorem ipsum dolor sit amet.",
    episode: 12,
    updatedText: "今日更新",
    link: "https://www.google.com",
  },
  {
    id: 2,
    imgSrc: "/img/11.jpg",
    title: "Lorem ipsum dolor sit amet consectetur.",
    episode: 36.5,
    updatedText: "昨日更新",
    link: "https://www.google.com",
  },
];
export default function AnimeVideo(props) {
  const animeVideoTitle = "動畫瘋新番";
  return (
    <div>
      <Title text={animeVideoTitle} />
      <div className="pb-1.25"></div>
      {mockData.map((item, index) => (
        <div key={item.id} className="animevideo__wrapper">
          <a href={item.link}>
            <img
              src={item.imgSrc}
              className="h-25 w-full object-cover"
              alt=""
            />
          </a>
          <div className="animevideo__info">
            <a href={item.link} className="animevideo__info__link">
              <p className="text-tiny text-center h-5.5 mb-2 overflow-hidden">
                {item.title}
              </p>
              <p className="text-tiny text-center">
                第&nbsp;{item.episode}&nbsp;集&nbsp;{item.updatedText}
              </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
