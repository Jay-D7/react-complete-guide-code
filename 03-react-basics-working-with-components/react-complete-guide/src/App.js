import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  // Arrow function SYNTAX
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );

  // Writing code without JSX So You always needed add import React from 'react'; in each file
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
};

export default App;

// Inside APP Function first lines
// const para = document.createElement('p');
// para.textContent = 'This is also visible';
// document.getElementById('root').append(para);
// This is how you'd it in Regular JS imperative

// const expenses = [
//   { title: 'Car insurance', amount: 294.67, date: new Date(2021, 2, 28) },
//   { title: 'Car insurance', amount: 294.67, date: new Date(2021, 2, 28) },
//   { title: 'Car insurance', amount: 294.67, date: new Date(2021, 2, 28) },
//   { title: 'Car insurance', amount: 294.67, date: new Date(2021, 2, 28) },
// ];
