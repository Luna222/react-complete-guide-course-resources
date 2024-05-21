import './Expenses.css';
import '../../components/ExpensesList/ExpensesList.css';

import NewExpense from '../../components/NewExpense/NewExpense.jsx';
import ExpensesFilter from '../../components/ExpensesFilter/ExpensesFilter.jsx';
import ExpenseItem from '../../components/ExpenseItem/ExpenseItem.jsx';
import Card from '../../components/Card/Card.jsx';
import ExpensesChart from '../../components/ExpensesChart/ExpensesChart.jsx';
import { DUMMY_EXPENSES } from './expenses-data.js';
import { useState } from 'react';
// import ExpensesList from '../../components/ExpensesList/ExpensesList.jsx';

export default function Expenses() {
  const [expenseArr, setExpenseArr] = useState(DUMMY_EXPENSES);
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
    // setExpenseList([...expenseList, newItem]);
    setExpenseArr(pendingState => [newItem, ...pendingState]);

    console.log('In Expense.jsx:');
    console.log(newItem);
  };

  const filteredExpenses = expenseArr.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = (
    <h2 className="expenses-list__fallback">Found no expenses.</h2>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = (
      <ul className="expenses-list">
        {filteredExpenses.map(({ id, title, amount, date }) => (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))}
      </ul>
    );
  }

  return (
    <div
      className="page-wrapper-expense"
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <NewExpense onAddExpense={addExpenseHandler} />
      {/*<< ⭐️ Component Composition >>: 
      ❗️whenever you COMBINE/COMPOSE a Component from smaller building blocks—nesting inner Components inside Parent Component, ur using Composition

      📍e.g. use Card Component as a shell/container around ExpenseItem list content */}
      <Card className="expenses">
        {/* [🔵 Controlled Component]
        (e.g. 'ExpensesFilter' being controlled from its Parent Component using selected='' attribute)*/}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p>Data for years {filterInfoText} is hidden.</p>
        <ExpensesChart expenses={filteredExpenses} />
        {expensesContent}
        {/* <ExpensesList items={filteredExpenses} /> */}
      </Card>
    </div>
  );
}
