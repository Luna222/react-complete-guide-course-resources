import './Card.css';

export default function Card(props) {
  // const classes = 'card' + props.className;
  return <div className="card">{props.children}</div>;
}
