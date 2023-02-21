import "./ExpenseForm.css";
import { useState } from "react";
function ExpenseForm(){
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) =>{
        event.preventDefault();
        setEnteredTitle(event.target.value);
    }
    const [enteredAmount, setEnteredAmount] = useState('');
    const amountChangeHandler = (event) =>{
        event.preventDefault();
        setEnteredAmount(event.target.value);
    }
    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) =>{
        event.preventDefault();
        setEnteredDate(event.target.value);
    }
    return(
         <form>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text'onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='text' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
)
}
export default ExpenseForm;