export default function ServeBarLink(props) {
  const { icon, title, link } = props;
  return (
    <a
      href={link}
      className="block pb-1.25 text-gray-350 hover:text-bahamut-blueGreen tracking-default"
    >
      <img src={icon} className="inline-block mr-2.5" alt="" />
      {title}
    </a>
  );
}
