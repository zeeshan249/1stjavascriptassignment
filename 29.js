// Problem Statement: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumofevens = 0;
let sumofodds = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    sumofevens = sumofevens + i;
  }
  else {
    sumofodds = sumofodds + i;
  }
}
console.log(`sum of evens is: ${sumofevens}`);
console.log(`sum of odds is: ${sumofodds}`);