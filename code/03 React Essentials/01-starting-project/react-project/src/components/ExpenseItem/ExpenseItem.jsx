import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate.jsx';
import React, { useState } from 'react';

//[Work under the hood]: 🚩 Once 'title' State Var changed, --> ExpenseItem will be re-rendered/re-evaluated/re-executed
export default function ExpenseItem(props) {
  //❗️React will grab the latest State by each render
  const [title, setTitle] = useState(props.title);

  const handleClick = e => {
    setTitle(
      // `${e.target.previousElementSibling.querySelector('h2').textContent}`
      'Updated!'
    );
  };

  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={handleClick}>Change Title</button>
      </div>
    </>
  );
}
