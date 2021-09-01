export default function NumberTag(props) {
  return (
    <span className="inline-block text-center w-5 h-5 text-tiny text-white bg-bahamut-numberTagBlue">
      {props.children}
    </span>
  );
}
