import ExpenseItem from './ExpensesList.jsx';
import './ExpensesList.css';

const ExpensesList = props => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  console.log(typeof props.items);

  return (
    <ul className="expenses-list">
      {/* <ExpenseItem title="" amount="" date="" />
        <ExpenseItem title="" amount="" date="" />
        <ExpenseItem title="" amount="" date="" />
        <ExpenseItem title="" amount="" date="" /> */}
      {props.items.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </ul>
  );
};

export default ExpensesList;
