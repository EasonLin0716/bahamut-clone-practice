export default function Title(props) {
  const { text } = props;
  return (
    <div className="app__title">
      <h1>{text}</h1>
    </div>
  );
}
