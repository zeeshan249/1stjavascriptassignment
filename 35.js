
 let arr=["Star",1,true,"Machine",4,-8,"many","Star"]
let count = 0;

let prev;

for (let i = 0; i < arr.length && count <= 1; i++) {
  count = 0;
  prev = arr[i];
  arr.forEach(e => {
    if (e === prev) {
      count++;
      
    }
  });
}

// console.log(count);

if (count == 1) {
  console.log(`All items are unique`);
}
else {
  console.log(count);
  console.log(`All items are not unique`);
}