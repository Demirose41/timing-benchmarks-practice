const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let total = 0;
  let totals = [];

  for(let i = increment; i <= 10 * increment; i += increment){
    total = addNums(i);
    totals = [...totals, total];
  }

  return totals;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let total = 0;
  let totals = [];

  for(let n = increment; n <= 10 * increment; n += increment){
    total = addManyNums(n);
    totals = [...totals, total];
  }

  return totals;
}

module.exports = [addNums10, addManyNums10];