import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import "./../UI/Expenses.css";

const Expenses = (props) => {

    const expensesList = props.expenses;

    const expensesComponents = expensesList.map((item) =>
        <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
        ></ExpenseItem>
    )

    return (
        <Card className="expenses">
            {expensesComponents}
        </Card>

    )
}

export default Expenses;