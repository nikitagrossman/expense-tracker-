import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

function ExpenseItem (props){
    const [title,setTitle] = useState(props.title);
    // let expenseTitle = props.title;
    const expenseAmount = props.amount;
    function clickHandler(){
        setTitle('Updated');
    }
return(
    <Card className='expense-item'>
        <ExpenseDate date = {props.date}/>
        <div>
            <h2 className="expense-item__description">{title}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>    
        <button onClick={clickHandler}>Change Title</button>
    </Card>
)
}
export default ExpenseItem;