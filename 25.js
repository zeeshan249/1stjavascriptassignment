// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//   - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//       - remove 'Honey' if you are allergic to honey
//         - modify Tea to 'Green Tea'
const addcart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let allergic = true;

if (!(addcart.includes('Meat'))) {
  addcart.unshift('Meat');
  console.log(addcart)
}
if (!(addcart.includes('Sugar'))) {
  addcart.push('Sugar');
  console.log(addcart);
}
if (allergic) {                                            
  //                               
    addcart.splice(addcart.indexOf('Honey'), 1);
  console.log(addcart);                        //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]
}
addcart[addcart.indexOf('Tea')] = "Green Tea";
console.log(addcart);//  [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]