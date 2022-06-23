import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {} // The same below,
  //Array destructuring
  // const [title, setTitle] = useState(props.title); // must be called Direcly inside component function
  // console.log('ExpenseItem evaluated by React');
  // Preference 'Handler' ending of function not called by us,
  // but attached to event listener, React call it when event occurs
  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* <h2>{title}</h2> */}
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;

// This component is a state less component
// also called presentational or dumb component
// because it doesn't have any internal state
// it's just there to output some data.

// you will have more presentational and dumb components
// than smart or stateful components.

//
//
// inside ExpenseItem function
// return <h2>Expense item!</h2>;

// const expenseDate = new Date(2021, 2, 28);
// const expenseTitle = 'Car insurance';
// const expenseAmount = 294.67;
