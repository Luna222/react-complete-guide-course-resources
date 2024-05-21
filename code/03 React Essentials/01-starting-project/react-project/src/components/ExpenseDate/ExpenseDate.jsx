import './ExpenseDate.css';

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' }),
    day = props.date.toLocaleString('en-US', { day: '2-digit' }),
    year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month ? month : ''}</div>
      <div className="expense-date__year">{year ? year : ''}</div>
      <div className="expense-date__day">{day ? day : ''}</div>
    </div>
  );
}
