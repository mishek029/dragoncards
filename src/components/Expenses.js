import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {

    const expensesList = props.expenses;

    const expensesComponents = expensesList.map((item) =>
        <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
        ></ExpenseItem>
    )

    return (
        <div className="expenses">
            {expensesComponents}
        </div>

    )
}

export default Expenses;