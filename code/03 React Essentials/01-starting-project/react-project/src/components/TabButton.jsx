/*
📌 Component Composition:
==> ❗️accessing via built-in [🌸 children] key of Props Object—
which points to children of Custom Component (e.g. children of TabButton)
*/
export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
      {/* <button>{props.children}</button> */}
    </li>
  );
}
