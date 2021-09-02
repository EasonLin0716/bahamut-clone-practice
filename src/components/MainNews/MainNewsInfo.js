import SeparateLine from "../SeparateLine/SeparateLine.js";
export default function MainNewsInfo(props) {
  const { items } = props;
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <div className="flex gap-1.25 py-1.5 items-center">
            <span className="text-tiny bg-bahamut-skyBlue text-bahamut-tagBlue  w-11.5 text-center">
              {item.tag}
            </span>
            <a
              href={item.href}
              className="hover:text-bahamut-linkBlue text-base hover:underline text-gray-350 overflow-hidden"
            >
              {item.title}
            </a>
            {item.hasVideo && (
              <img
                className="w-3.5 h-3.5"
                src="https://i2.bahamut.com.tw/gnn/movie.gif"
                alt="movie-icon"
              />
            )}
            {item.isContributed && (
              <img
                className="w-3.5 h-3.5"
                src="https://i2.bahamut.com.tw/gnn/editor2.gif"
                alt="contribute-icon"
              />
            )}
          </div>
          <SeparateLine />
        </div>
      ))}
    </div>
  );
}
