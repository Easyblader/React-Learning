import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const addNewExpense = (newExpense) => {
    const expense = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.AddExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={addNewExpense} />
    </div>
  );
}

export default NewExpense;
