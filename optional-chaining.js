// declare variable based on the name of an object property

const myObject = { x: 2, y: 4, z: 455, a: 54, b: 9 };
const { x, b } = myObject;
// console.log('myObject.p', myObject?.p?.q);


// destructuring array

const [p, q] = [2, 455, 98, 77];
// console.log(p, q);


const [best, faltu] = ['shakib', 'messi'];
// console.log(best, faltu)
const { sky, color } = { sky: 'blue', soil: 'matti', color: 'red', money: 5000 };



// chaining
const company = {
  name: 'Gp',
  ceo: { id: 2, name: 'akmol', food: 'fuska' },

  web: {
    work: 'website development',
    employee: 22,
    framework: 'react',

    tech: {
      first: 'html',
      second: 'css',
      third: 'js'
    }
  }
};

console.log(company?.web?.tech?.third);
console.log(company?.backend?.tech.third);














