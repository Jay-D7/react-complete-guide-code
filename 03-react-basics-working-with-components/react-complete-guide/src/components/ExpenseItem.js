// import React from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

//
//
// inside ExpenseItem function
// return <h2>Expense item!</h2>;

// const expenseDate = new Date(2021, 2, 28);
// const expenseTitle = 'Car insurance';
// const expenseAmount = 294.67;
