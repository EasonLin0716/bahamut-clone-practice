export default function WelfareAgencyItem(props) {
  const { imgSrc, tag, content } = props;
  return (
    <div className="welfare-agency-item cursor-pointer flex items-center my-1.25">
      <img src={imgSrc} alt="" className="w-22.5 h-22.5 mr-2 object-cover" />
      <div>
        <span className="text-tiny text-bahamut-gold py-0.5 px-1 border border-bahamut-gold rounded mb-1">
          {tag}
        </span>
        <p className="text-tiny text-gray-350">{content}</p>
      </div>
    </div>
  );
}
