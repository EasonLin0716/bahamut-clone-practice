export default function OnSaleProductionTabsPC(props) {
  const { item } = props;
  return (
    <div className="flex justify-between items-center pb-1.75">
      <span className="w-7.5 text-center text-xs text-gray-450 border border-gray-650">
        {item.type}
      </span>
      <a
        className="text-tiny text-bahamut-linkBlue hover:underline flex-grow ml-1.25 overflow-hidden whitespace-nowrap"
        href={item.link}
      >
        {item.title}
      </a>
      <span className="text-xs text-gray-450 ">{item.date}</span>
    </div>
  );
}
