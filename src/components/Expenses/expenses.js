import './AllExpanses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function AllExpenses(props){
    const expenses = props.items
    const [filteredYear, setFilteredYear] = useState('all')
    // eslint-disable-next-line eqeqeq
    const  filteredExpenses = filteredYear === 'all' ? expenses : expenses.filter(expense=>{
      return expense.date.getFullYear().toString()===filteredYear
    })
    const filterChangeHandler = (selectedYear)=>{
      setFilteredYear(selectedYear)
      console.log(selectedYear)
    }
    
  return(
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items = {filteredExpenses}/>
    </Card>
  )
}
export default AllExpenses;
