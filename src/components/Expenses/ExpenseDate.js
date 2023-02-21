import './ExpanseDate.css';
function ExpenseDate(props){
    const month = props.date.toLocaleString('he-IL',{month:'long'});
    const year = props.date.toLocaleString('he-IL',{year:'2-digit'});
    const day = props.date.getFullYear();
    return(
    <div className= "expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
    </div>
    )
}
export default ExpenseDate;