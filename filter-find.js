const numbers = [3, 56, 5, 3, 32, 354, 66, 68, 56];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);

// console.log(smallNumbers);



const products = [
  { name: 'water bottle', price: 50, color: 'yellow' },
  { name: 'mobile phone', price: 25050, color: 'blue' },
  { name: 'smart watch', price: 1550, color: 'red' },
  { name: 'sticky note', price: 50, color: 'pink' },
  { name: 'sticky note', price: 50, color: 'pink' },
  { name: 'glass', price: 150, color: 'silver' },
];
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const pinks = products.filter(product => product.color == 'pink');
// console.log(pinks);


const whiteItem = products.find(product => product.color == 'pink');
console.log(whiteItem);

