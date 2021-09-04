export default function MainForumHeading() {
  return (
    <div className="flex justify-between flex-grow bg-gray-550 py-1.75">
      <div>
        <img
          src="/bahamut-clone-practice/icon/new_icon1.gif"
          className="pr-1.25 pl-1.25 inline-block"
          alt=""
        />
        <span className="text-gray-350">哈啦板</span>
      </div>

      <span className="text-gray-350 pr-1.25">昨日人氣</span>
    </div>
  );
}
