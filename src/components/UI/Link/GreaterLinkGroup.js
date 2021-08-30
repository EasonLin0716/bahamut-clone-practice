export default function GreaterLink(props) {
  return (
    <a
      className="text-base text-bahamut-linkBlue hover:underline"
      href={props.href}
    >
      &gt;&nbsp;{props.children}
    </a>
  );
}
