import React from 'react';

import ExpenseForm from '../ExpenseForm/ExpenseForm.jsx';
import './NewExpense.css';

const NewExpense = () => {
  return (
    <div className="new-expense" style={{ marginBottom: 0 }}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
