const friends = ['tom', 'shakib Al Hassan', 'Leo messi', 'rabeya'];
const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
  { name: 'water bottle', price: 50, color: 'yellow' },
  { name: 'mobile phone', price: 25050, color: 'blue' },
  { name: 'smart watch', price: 1550, color: 'red' },
  { name: 'sticky note', price: 50, color: 'pink' },
  { name: 'glass', price: 150, color: 'silver' },
]


const productsName = products.map(product => product.name);
const productsPrice = products.map(product => product.price);
// console.log(productsPrice);
// products.map(product => console.log(product));

products.forEach(product => console.log(product));
