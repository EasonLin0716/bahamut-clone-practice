import Link from "../UI/Link/Link";
export default function OnSaleProductionTabsAnime(props) {
  const { item } = props;
  return (
    <div className="flex justify-between items-center pb-1.75">
      <Link
        href={item.link}
        customClass="text-bahamut-linkBlue whitespace-nowrap"
      >
        {item.title}
      </Link>
      <span className="text-xs text-gray-450">{item.date}</span>
    </div>
  );
}
