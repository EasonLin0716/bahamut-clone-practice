export default function Link(props) {
  return (
    <a
      className={`${props.customClass} text-tiny hover:underline flex-grow  overflow-hidden`}
      href={props.href}
    >
      {props.children}
    </a>
  );
}
