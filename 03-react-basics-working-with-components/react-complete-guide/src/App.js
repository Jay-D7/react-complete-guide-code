import ExpenseItem from './components/ExpenseItem';

function App() {
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible';
  // document.getElementById('root').append(para);
  // This is how you'd it in Regular JS imperative

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
