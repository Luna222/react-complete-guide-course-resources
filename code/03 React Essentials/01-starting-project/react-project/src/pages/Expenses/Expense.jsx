import './Expenses.css';
import ExpenseItem from '../../components/ExpenseItem/ExpenseItem.jsx';
import { expenses } from './expenses-data.js';
import Card from '../../components/Card/Card.jsx';

export default function Expenses() {
  return (
    <div
      className="page-wrapper-expense"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/*<< ⭐️ Component Composition >>: 
      ❗️whenever you COMBINE/COMPOSE a Component from smaller building blocks—Component, ur using Composition

      📍e.g. use Card Component as a shell/container around ExpenseItem list content */}
      <Card>
        {/* <ExpenseItem title="" amount="" date="" />
        <ExpenseItem title="" amount="" date="" />
        <ExpenseItem title="" amount="" date="" />
        <ExpenseItem title="" amount="" date="" /> */}
        {expenses.map(({ id, title, amount, date }) => (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))}
      </Card>
    </div>
  );
}
