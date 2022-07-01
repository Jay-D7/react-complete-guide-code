import ExpenseItem from './components/ExpenseItem';

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>Building a First Custom Component
    </div>
  );
};

export default App;

// This is how you'd it in Regular JS imperative:
// const para = document.createElement('p');
// para.textContent = 'This is also visible';
// document.getElementById('root').append(para);
