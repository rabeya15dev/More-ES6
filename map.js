const numbers = [3, 10, 8, 9];
const output2 = [];

/* function doubleold(number) {
  return number * 2;
} */

const doubleold = number => number * 2;

for (const number of numbers) {
  const result = doubleold(number);
  output2.push(result);
}
// console.log(output2);


// 1.loop through each element
// 2.for each element call the provided function
// 3.result of each element will be stroed in an array
// const output = numbers.map(doubleold);
// const output = numbers.map(number => number * 2);

const output = numbers.map(x => x * 2);

// console.log(output);


const sqares = numbers.map(x => x * x);
console.log(sqares);