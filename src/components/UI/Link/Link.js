export default function Link(props) {
  return (
    <a
      className={`${props.customClass} text-tiny hover:underline flex-grow ml-1.25 overflow-hidden`}
      href={props.href}
    >
      {props.children}
    </a>
  );
}
