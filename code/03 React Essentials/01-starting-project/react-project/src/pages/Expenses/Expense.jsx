import './Expenses.css';
import ExpenseItem from '../../components/ExpenseItem/ExpenseItem.jsx';
import NewExpense from '../../components/NewExpense/NewExpense.jsx';
import ExpensesFilter from '../../components/ExpensesFilter/ExpensesFilter.jsx';
import { expenses } from './expenses-data.js';
import Card from '../../components/Card/Card.jsx';
import { useState } from 'react';

export default function Expenses() {
  const [expenseList, setExpenseList] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState('2024');
  //register a new State:
  // const [filterInfoText, setFilterInfoText] = useState('2022 & 2023');
  /*
  [💫 Derived / Computed State value] (filterInfoText): 
    if you are setting a State that is directly related to another State 
    ==> add a new variable instead of creating multiple separate States
  */
  let filterInfoText = '2022 & 2023';

  switch (filteredYear) {
    case '2022':
      filterInfoText = '2023 & 2024';
      break;
    case '2023':
      filterInfoText = '2022 & 2024';
    // break;
    // case '2024':
    //   filterInfoText = '2022 & 2023';
  }

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = newItem => {
    //🔺 render data list dynamically
    setExpenseList([...expenseList, newItem]);

    // console.log('In Expense.jsx:');
    // console.log(expenseList);
  };

  return (
    <div
      className="page-wrapper-expense"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <NewExpense onAddExpense={addExpenseHandler} />
      {/*<< ⭐️ Component Composition >>: 
      ❗️whenever you COMBINE/COMPOSE a Component from smaller building blocks—nesting inner Components inside Parent Component, ur using Composition

      📍e.g. use Card Component as a shell/container around ExpenseItem list content */}
      <Card>
        {/* [🔵 Controlled Component]
        (e.g. 'ExpensesFilter' being controlled from its Parent Component using selected='' attribute)*/}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p>Data for years {filterInfoText} is hidden.</p>
        {/* <ExpenseItem title="" amount="" date="" />
        <ExpenseItem title="" amount="" date="" />
        <ExpenseItem title="" amount="" date="" />
        <ExpenseItem title="" amount="" date="" /> */}
        {expenseList.map(({ id, title, amount, date }) => (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))}
      </Card>
    </div>
  );
}
