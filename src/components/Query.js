import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import Error from "./Error";

const Query = ({saveBudget, saveRemainer, updateQuery}) => {
  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false);

  //Function to define budget
  const defineBudget = (e) => {
    saveQuantity(parseInt(e.target.value, 10));
  };
  //Function to add budget
  const addBudget = (e) => {
    e.preventDefault();

    //Validation
    if (quantity < 1 || isNaN(quantity)) {
      saveError(true);
      return;
    }
    //If we pass validation
    saveError(false);
    saveBudget(quantity);
    saveRemainer(quantity);
    updateQuery(false);
  };

  return (
    <Fragment>
      <h2>Place your budget</h2>
      {error ? <Error message="Budget is incorrect" /> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Enter your budget"
          onChange={defineBudget}
        />
        <input type="submit" className="button-primary u-full-width" />
      </form>
    </Fragment>
  );
};

Query.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  saveRemainer: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired
}

export default Query;
