import Link from "../Link/Link";
export default function VideoCard(props) {
  const { item } = props;
  return (
    <div key={item.id} className="w-full">
      <div className="game-crazy__cover">
        <img
          src={item.imgSrc}
          className="object-cover h-full w-full"
          alt="game-crazy-cover"
        />
        {item.views && (
          <div className="absolute bottom-1 right-2.25">
            <span className="text-white text-xs flex gap-1.25">
              <img
                src="/icon/eye-solid.svg"
                alt="eye-icon"
                className="w-3.25 mb-0.5"
              />
              {item.views}
            </span>
          </div>
        )}
      </div>
      <div className="pb-1.25 pt-0.75">
        <Link
          href="https://www.google.com"
          customClass="hover:text-bahamut-linkBlue text-gray-350"
        >
          {item.title}
        </Link>
      </div>
    </div>
  );
}
