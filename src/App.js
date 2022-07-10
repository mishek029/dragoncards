import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 246.97, date: new Date(2021, 2, 18) },
    { title: 'Car', amount: 246456456.97, date: new Date(1999, 9, 19) },
    { title: 'Toilet papet', amount: 111.97, date: new Date(2100, 8, 18) },
    { title: 'Something', amount: 55.97, date: new Date(2021, 2, 18) },
    { title: 'Lolo', amount: 8.8, date: new Date(2000, 2, 18) },
    { title: 'NO IDEA', amount: 666, date: new Date(1992, 4, 27) },
  ];


  return (
    <div>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
