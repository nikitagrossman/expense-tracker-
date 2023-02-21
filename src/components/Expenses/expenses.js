import ExpenseItem from "./ExpenseItem";
import './AllExpanses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function AllExpenses(props){
    const expenses = props.items
    const [filteredYear, setFilteredYear] = useState('2021')
    const filterChangeHandler = (selectedYear)=>{
      setFilteredYear(selectedYear)
      console.log(selectedYear)
    }
  return(
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </Card>
  )
}
export default AllExpenses;