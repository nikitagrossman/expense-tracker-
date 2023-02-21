import AllExpenses from "./components/Expenses/expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'קניות',
      amount: 300,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2',
      title: 'ארנונה',
      amount: 20,
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'חשמל',
      amount: 80,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'מים',
      amount: 60,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler= (data)=>{
    console.log('data from app.js')
    console.log(data)
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <AllExpenses items={expenses} />
    </div>
  );
}

export default App;
