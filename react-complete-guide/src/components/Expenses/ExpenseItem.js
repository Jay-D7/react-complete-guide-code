import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {} // The same below,

  const clickHandler = () => {
    // Preference 'Handler' ending of function not called by us,
    // but attached to event listener, React call it when event occurs
    console.log('Clicked!!!!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
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
