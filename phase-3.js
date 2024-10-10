const [addNums, addManyNums] = require("./phase-1");

let addNums10Times = [];
let addManyNums10Times = [];
function addNums10Timing(increment) {
  let total = 0;
  let totals = [];
  
  console.time("addNums");
  for(let i = increment; i <= 10 * increment; i += increment){
    total = addNums(i);
    console.timeLog("addNums");
    totals = [...totals, total];
    addNums10Times = [...addNums10Times, Date.now()];
  }

  console.timeEnd("addNums");
  return totals;

}


function addManyNums10Timing(increment) {
  console.time("addManyNums");
  let total = 0;
  let totals = [];

  for(let n = increment; n <= 10 * increment; n += increment){
    total = addManyNums(n);
    console.timeLog("addManyNums");
    totals = [...totals, total];
    addManyNums10Times = [...addManyNums10Times, Date.now()];
  }
  console.timeEnd("addManyNums");
  return totals;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
console.log("\n***********\n");
addNums10Times.forEach((time)=> console.log(time - addNums10Times[0] ));
console.log("\n***********\n");
addManyNums10Times.forEach((time)=> console.log(time - addManyNums10Times[0]));