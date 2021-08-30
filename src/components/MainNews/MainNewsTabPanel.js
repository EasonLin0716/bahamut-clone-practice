import MainNewsCard from "./MainNewsCard";
export default function MainNewsTabPanel(props) {
  const { items } = props;
  return (
    <div className="border-l border-r border-gray-250">
      <div className="flex justify-between px-1 py-1.75 gap-2 border-b border-gray-250">
        {items.slice(0, 4).map((item) => (
          <MainNewsCard key={item.id} item={item}></MainNewsCard>
        ))}
      </div>
      <div className="flex justify-between px-1 py-1.75 gap-2 border-b border-gray-250">
        {items.slice(4, 8).map((item) => (
          <MainNewsCard key={item.id} item={item}></MainNewsCard>
        ))}
      </div>
      <div className="flex justify-between px-1 py-1.75 gap-2 border-b border-gray-250">
        {items.slice(8, 12).map((item) => (
          <MainNewsCard key={item.id} item={item}></MainNewsCard>
        ))}
      </div>
    </div>
  );
}
