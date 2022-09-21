
// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//   - Sort the array and find the min and max age
//   - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//       - Find the range of the ages(max minus min)
//         - Compare the value of(min - average) and(max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(ages.sort());   //modifies the array

let min = ages[0];
let max = ages[ages.length - 1];
console.log(`Min age is ${min} and max age is ${max}`)    //Min age is 19 and max age is 26

let median = ages[Math.round(ages.length / 2)];
console.log(`Median age is ${median}`);  //Median age is 24
let range = max - min;
console.log(`Range age is ${range}`);  //Range age is 7

//sum of ages
let total=0
for(let value of ages){
    total=total+value;
}
let average=(Math.round(total/ages.length));  // Average age of all is 23
console.log(`Average age of all is ${average}`);

console.log(`Difference between Minimum and Average age is ${Math.abs(min - average)}`);
console.log(`Difference between Maximum and Average age is ${Math.abs(max - average)}`);