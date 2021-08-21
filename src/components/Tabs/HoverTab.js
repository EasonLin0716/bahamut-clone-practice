export default function HoverTab(props) {
  return (
    <div
      className={`react-tabs__tab ${
        props.isActive ? "react-tabs__tab--selected" : ""
      }`}
      onMouseEnter={props.onHover}
    >
      {props.children}
    </div>
  );
}

HoverTab.tabsRole = "Tab";
