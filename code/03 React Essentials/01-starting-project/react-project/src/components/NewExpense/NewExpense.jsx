import React from 'react';

import ExpenseForm from '../ExpenseForm/ExpenseForm.jsx';
import './NewExpense.css';

const NewExpense = props => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  return (
    <div className="new-expense" style={{ marginBottom: 0 }}>
      {/* 'saveExpenseDataHandler' callbackFn is used as a ✨Pointer that will be triggered by React when the form is submitted */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
