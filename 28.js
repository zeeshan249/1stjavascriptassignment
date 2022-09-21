//Problem Statement: Use for loop to iterate from 0 to 100 and print only prime numbers
//prime  no that do divisible by 1 and itself
let count=0
let i,j 
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++

}

if(count==2)

console.log(j);
console.log("count is"+count);
count=0


  
}