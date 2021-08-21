import Tag from "../UI/Tag/Tag";
import Link from "../UI/Link/Link";
export default function OnSaleProductionTabsTV(props) {
  const { item } = props;
  return (
    <div className="flex justify-between items-center pb-1.75">
      <Tag customClass="w-12.5 border-gray-650 text-gray-450">{item.type}</Tag>
      <Link href={item.link}>{item.title}</Link>
      <span className="text-xs text-gray-450">{item.date}</span>
    </div>
  );
}
