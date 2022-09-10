import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 24.12,
    date: new Date(2020, 2, 28),
  },
  { id: "e3", title: "Wheels", amount: 53.0, date: new Date(2021, 2, 28) },
  { id: "e4", title: "Potatoes", amount: 69.42, date: new Date(2022, 2, 28) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpense = (NewExpense) => {
    setExpenses((prevExpenses) => {
      return [NewExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense AddExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
