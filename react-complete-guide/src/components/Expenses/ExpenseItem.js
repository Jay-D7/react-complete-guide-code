import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {} // The same below,
  //Array destructing
  const [title, setTitle] = useState(props.title); // must be called Direcly inside component function
  console.log('ExpenseItem evaluated by React');
  // Preference 'Handler' ending of function not called by us,
  // but attached to event listener, React call it when event occurs
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

//
//
// inside ExpenseItem function
// return <h2>Expense item!</h2>;

// const expenseDate = new Date(2021, 2, 28);
// const expenseTitle = 'Car insurance';
// const expenseAmount = 294.67;
