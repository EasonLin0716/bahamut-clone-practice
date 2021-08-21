export default function Link(props) {
  return (
    <a
      className="text-tiny text-bahamut-linkBlue hover:underline flex-grow ml-1.25 overflow-hidden whitespace-nowrap"
      href={props.href}
    >
      {props.children}
    </a>
  );
}
