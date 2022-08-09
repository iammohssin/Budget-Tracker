import React from "react";
import ExpenseItem from "./expenseItem";

const ExpenseList = () => {
    const expenses = [
        {id: 42234324, name: 'Shopping', cost: 1500},
        {id: 42434324, name: 'Food', cost: 2000},
        {id: 53453455, name: 'Mobile', cost: 1000},
        {id: 35435345, name: 'Fuel', cost: 500},
    ];

    return (
        <ul className="list-group">
           {expenses.map((expense) => (
            <ExpenseItem id= {expense.id} name = {expense.name} cost = {expense.cost} />
           ))}
        </ul>
    )
}

export default ExpenseList;