export const checkBudget = (budget, remainer) => {
  let cssClass;

  if ((budget / 4) > remainer) {
    cssClass = 'alert alert-danger';
  }
  else if ((budget / 2) > remainer){
    cssClass = 'alert alert-warning';
  }
  else {
    cssClass = 'alert alert-success';
  }

  return cssClass;
}