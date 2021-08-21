import SeparateLine from "../SeparateLine/SeparateLine.js";
const mockData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    episode: 2,
    link: "https://www.google.com",
    day: "週五",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet.",
    episode: 4,
    link: "https://www.google.com",
    day: "週四",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet.",
    episode: 12,
    link: "https://www.google.com",
    day: "週四",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet.",
    episode: 5,
    link: "https://www.google.com",
    day: "週四",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet.",
    episode: 3,
    link: "https://www.google.com",
    day: "週三",
  },
];
export default function AnimeList() {
  return (
    <div className="border border-gray-250">
      {mockData.map((item, index) => (
        <div key={index}>
          <div className="m-1.5">
            <span>
              <a className="animelist__link" href={item.link}>
                {item.title}
              </a>
              <span className="text-tiny text-gray-450">[{item.episode}]</span>
            </span>
            <span className="text-tiny text-gray-450 float-right">
              {item.day}
            </span>
          </div>
          <div className="mx-1.5">
            {index < mockData.length - 1 && <SeparateLine />}
          </div>
        </div>
      ))}
    </div>
  );
}
