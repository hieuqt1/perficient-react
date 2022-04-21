import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div className="WholePage">
      {/* in NewExpense, we're passing the addExpenseHandler 
      function from App.js to NewExpense.js, where NewExpense.js 
      will take an object and stuff it back into the function that was passed */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/*can use components as custom HTML elements*/}
      {/* Expenses passes the expenses list from App.js to Expenses.js to use */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
