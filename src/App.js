import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget  from "./components/budget";
import Remaining from "./components/remaining";
import Expense from "./components/expense";
import ExpenseList from "./components/expenseList";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
        <Remaining />
        </div>
        <div className="col-sm">
        <Expense />
        </div>
      </div>
      <h3 className=" mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
        <ExpenseList />
        </div>
      </div>
    </div>
  )
};

export default App;