import React, { useState } from "react";
import PropTypes from 'prop-types';
import Error from "./Error";
import shortid from "shortid";

const Form = ({saveExpense, saveCreateExpense}) => {
  const [name, saveName] = useState("");
  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false);

  const addExpense = (e) => {
    e.preventDefault();

    //Validation
    if (quantity < 1 || isNaN(quantity) || name.trim() === '') {
      saveError(true);
      return;
    }
    saveError(false);

    //Build the expense
    const expense = {
      name,
      quantity,
      id: shortid.generate()
    }

    //Pass the expense to main component
    saveExpense(expense);
    saveCreateExpense(true);

    //Reset form
    saveName('');
    saveQuantity(0);
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Add your expenses here</h2>
      {error ? (
        <Error message="Both fields are required or incorrect budget" />
      ) : null}
      <div className="field">
        <label>Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="E.g. Food"
          value={name}
          onChange={(e) => saveName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Expense Quantity</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="E.g. 500"
          value={quantity}
          onChange={(e) => saveQuantity(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add Expense"
      />
    </form>
  );
};

Form.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  saveCreateExpense: PropTypes.func.isRequired
}

export default Form;
