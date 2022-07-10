import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 246.97, date: new Date(2021, 2, 18) },
    { title: 'Car', amount: 246456456.97, date: new Date(1999, 9, 19) },
    { title: 'Toilet papet', amount: 111.97, date: new Date(2100, 8, 18) },
    { title: 'Something', amount: 55.97, date: new Date(2021, 2, 18) },
    { title: 'Lolo', amount: 8.8, date: new Date(2000, 2, 18) },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
