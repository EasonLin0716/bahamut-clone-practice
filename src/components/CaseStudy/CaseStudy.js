import Title from "../UI/Title/Title.js";
import SeparateLine from "../SeparateLine/SeparateLine.js";
const mockData = [
  {
    id: 1,
    title: "事我劇長列樹的文",
    link: "https://www.google.com",
    fontColor: "#009ea0",
  },
  {
    id: 2,
    title: "事我劇長列樹的文；男是什！了主裡美",
    link: "https://www.google.com",
    fontColor: "#00a002",
  },
  {
    id: 3,
    title: "事我劇長列樹的文，把布間物子即評死開",
    link: "https://www.google.com",
    fontColor: "#009ea0",
  },
  {
    id: 4,
    title: "事我劇長列樹的文",
    link: "https://www.google.com",
    fontColor: "#00a002",
  },
  {
    id: 5,
    title: "事我劇長列樹的文：曾史感特報可！眾知員？",
    link: "https://www.google.com",
    fontColor: "#009ea0",
  },
  {
    id: 6,
    title: "事我劇長列樹的文",
    link: "https://www.google.com",
    fontColor: "#00a002",
  },
  {
    id: 7,
    title: "事我劇長列樹的文",
    link: "https://www.google.com",
    fontColor: "#009ea0",
  },
];
export default function CaseStudy() {
  const caseStudyTitle = "學術研究";
  return (
    <div>
      <Title text={caseStudyTitle} />
      <ul className="border-l border-r border-b border-gray-250 px-2.5">
        {mockData.map((item, index) => {
          const linkStyle = {
            color: item.fontColor,
          };
          return (
            <li key={item.id} className="relative">
              <img
                src="/icon/green-dot.png"
                alt=""
                className="absolute top-3"
              />
              <a
                href={item.link}
                style={linkStyle}
                className="block py-1.25 pl-3.75 text-tiny hover:text-underline"
              >
                {item.title}
              </a>
              {index < mockData.length - 1 && (
                <div className="pl-3.75">
                  <SeparateLine />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
