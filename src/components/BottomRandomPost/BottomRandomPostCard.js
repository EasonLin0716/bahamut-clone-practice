export default function BottomRandomPostCard(props) {
  const { item } = props;
  return (
    <div className="border border-gray-250">
      <img src={item.imgSrc} className="w-full" alt="cover" />
      <div className="pt-4 pl-3.75 pl-3.75 pb-3.75">
        <a
          href="https://www.google.com"
          className="mb-1 inline-block text-gray-350 hover:text-bahamut-linkBlue hover:underline"
        >
          {item.title}
        </a>
        <div className="text-gray-250 flex gap-3 items-center">
          <span className="text-tiny">{item.topic}</span>
          <span className="text-tiny">
            <img
              className="w-3 inline-block mr-0.5 pb-0.5"
              src="/icon/thumbs-up-regular.svg"
              alt=""
            />
            {item.likes}
          </span>
          <span className="text-tiny">
            <img
              className="w-4 inline-block mr-0.5 pb-0.5"
              src="/icon/comments-solid.svg"
              alt=""
            />
            {item.replies}
          </span>
        </div>
      </div>
    </div>
  );
}
