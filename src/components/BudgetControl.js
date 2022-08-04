import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { checkBudget } from '../helpers'

const BudgetControl = ({budget, remainer}) => {
  return ( 
    <Fragment>
      <div className="alert alert-primary">
        Budget: $ {budget}
      </div>
      <div className={checkBudget(budget, remainer)}>
        Remainer: $ {remainer}
      </div>
    </Fragment> 
   );
}

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remainer: PropTypes.number.isRequired
}
 
export default BudgetControl;
