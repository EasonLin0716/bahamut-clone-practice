import Link from "../UI/Link/Link";
export default function MainNewsCard(props) {
  const { item } = props;
  return (
    <div className="relative w-45">
      <div className="h-45">
        <img
          src={item.imgSrc}
          className="object-cover w-full h-full"
          alt="News-img"
        />
        <span className="main-news-card__tag">{item.tag}</span>
      </div>
      <Link
        href={item.href}
        customClass="hover:text-bahamut-linkBlue text-gray-350 leading-18"
      >
        {item.title}
      </Link>
    </div>
  );
}
