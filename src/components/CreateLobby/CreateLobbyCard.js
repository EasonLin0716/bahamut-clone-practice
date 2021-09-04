import Link from "../UI/Link/Link";
export default function CreateLobbyCard(props) {
  const { item } = props;
  return (
    <div>
      <img src={item.imgSrc} className="w-45 h-45 object-cover" alt="cover" />
      <Link
        href="https://www.google.com"
        customClass="hover:text-bahamut-linkBlue text-gray-350 leading-18 my-1.75 inline-block"
      >
        {item.title}
      </Link>
    </div>
  );
}
