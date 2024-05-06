import React, { useState, useRef } from 'react';
import { expenses } from '../../pages/Expenses/expenses-data.js';

import './ExpenseForm.css';

const ExpenseForm = () => {
  //❗️React will grab the latest State by each render

  //1️⃣ Using multiple States:
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //2️⃣ Other way: Using One State
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const count = useRef(4);

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value, //👍 can override key-value pairs
    // });

    /*
    👉 Updating State That 🔹Depends On The Previous State:
      🙅‍♀️ calling the set function does NOT update the State variable in the already running code.

      [🟢 For each Render at a time]: often use setState(updaterFn(pendingState => nextState)) for value accumulations or merging States. 
      React schedules multiple Updater Functions pushed in a Queue (FIFO call order)
      ==> 👍 by doing this, setState func will always set the current State to the latest State snapshot (a safer way)
    */
    // setUserInput(prevState => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  //👉 Alternative: Creating A Shared Handler Function
  const inputChangeHandler = (identifier, value) => {
    switch (identifier) {
      case 'title':
        setEnteredTitle(value);
        break;
      case 'date':
        setEnteredDate(value);
        break;
      case 'amount':
        setEnteredAmount(value);
    }
  };

  //Handling Form Submission
  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      id: `e${++count.current}`,
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    // console.log(userInput);
    setEnteredTitle('reflected!');
    setEnteredAmount('');
    setEnteredDate('');

    // //My Experiments
    // const monthNames = [
    //   'January',
    //   'February',
    //   'March',
    //   'April',
    //   'May',
    //   'June',
    //   'July',
    //   'August',
    //   'September',
    //   'October',
    //   'November',
    //   'December',
    // ];

    // const expenseItemHtml = `<div class="expense-item">
    //   <div class="expense-date"><div class="expense-date__month">${
    //     monthNames[expenseData.date.getMonth()]
    //   }</div><div class="expense-date__year">${expenseData.date.getFullYear()}</div><div class="expense-date__day">${expenseData.date.getDay()}</div>
    // </div><div class="expense-item__description"><h2>${
    //   expenseData.title
    // }</h2><div class="expense-item__price">$94.12</div></div><button>Change Title</button>
    // </div>`;

    // document
    //   .querySelector('.card')
    //   .insertAdjacentHTML('beforeend', expenseItemHtml);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* 
          [👉 Adding 🔹Two-Way Binding to Web Elements]: (useful in Form Handling)
            means that we not only listen to event (e.g. onChange), but also can pass a new attribute (e.g. value='') back into the Element (e.g.input)
            ==> 💚 so that we can reset or change the input to get reflected programmatically by each Re-render upon submission
          */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* <input
            type="text"
            onChange={event => inputChangeHandler('title', event.target.value)}
          /> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
