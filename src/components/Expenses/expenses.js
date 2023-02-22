import ExpenseItem from "./ExpenseItem";
import './AllExpanses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function AllExpenses(props){
    const expenses = props.items
    const [filteredYear, setFilteredYear] = useState('2021')
    // eslint-disable-next-line eqeqeq
    const  yearfilterHandler = expenses.filter(expense=>expense.date.getFullYear()==filteredYear)
    const filterChangeHandler = (selectedYear)=>{
      setFilteredYear(selectedYear)
      console.log(selectedYear)
    }
  return(
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {yearfilterHandler.map((expense)=> (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />))
      }
    </Card>
  )
}
export default AllExpenses;