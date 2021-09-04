const platforms = ["PS5", "PS4", "XboxSX", "Switch", "iOS", "Android"];
const month = new Date().getMonth() + 1;
const date = new Date().getDate();
const time = `${month > 9 ? month : "0" + month}/${
  date > 9 ? date : "0" + date
} 12:00`;
export default function MainForumTop() {
  return (
    <div className="flex justify-between items-end pb-2.5">
      <div className="flex">
        {platforms.map((item, index) => (
          <div key={index}>
            {index ? <span className="text-gray-350">|</span> : ""}
            <a
              href="https://www.google.com"
              className="inline-block mx-2 text-gray-350 font-bold hover:text-bahamut-numberTagBlue hover:underline"
            >
              {item}
            </a>
          </div>
        ))}
      </div>
      <span className="text-gray-250 text-xs">{`${time} 更新`}</span>
    </div>
  );
}
