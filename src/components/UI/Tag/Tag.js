export default function Tag(props) {
  const { customClass } = props;
  return (
    <span className={`${customClass} text-center text-xs border `}>
      {props.children}
    </span>
  );
  // w-7.5 text-center text-xs text-gray-450 border border-gray-650
}
