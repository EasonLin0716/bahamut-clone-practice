import WelfareAgency from "../WelfareAgency/WelfareAgency";
export default function RightAside() {
  return (
    <div className="flex flex-col gap-2.5">
      <img
        src="/bahamut-clone-practice/img/11.jpg"
        alt=""
        className="h-80 object-cover"
      />
      <img
        src="/bahamut-clone-practice/img/12.jpg"
        alt=""
        className="h-80 object-cover"
      />
      <WelfareAgency />
    </div>
  );
}
