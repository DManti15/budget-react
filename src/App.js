import React from "react";
import { useState, useEffect } from "react";
import Query from "./components/Query";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

const App = () => {
  const [budget, saveBudget] = useState(0);
  const [remainer, saveRemainer] = useState(0);
  const [showQuery, updateQuery] = useState(true);
  const [expenses, saveExpenses] = useState([]);
  const [expense, saveExpense] = useState({});
  const [createExpense, saveCreateExpense] = useState(false);

  //useEffect that updates remaining
  useEffect(() => {
    if (createExpense) {
      saveExpenses([...expenses, expense]);

      const budgetRemainer = remainer - expense.quantity;
      saveRemainer(budgetRemainer);
      saveCreateExpense(false);
    }
  }, [expense, createExpense, expenses, remainer]);

  return (
    <div className="container">
      <header>
        <h1>Weekly Expenses</h1>
      </header>
      <div className="main-content content">
        {showQuery ? (
          <Query
            saveBudget={saveBudget}
            saveRemainer={saveRemainer}
            updateQuery={updateQuery}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Form
                saveExpense={saveExpense}
                saveCreateExpense={saveCreateExpense}
              />
            </div>
            <div className="one-half column">
              <List expenses={expenses} />
              <BudgetControl budget={budget} remainer={remainer} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
