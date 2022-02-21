class support {
  name;
  desifnation = 'support Web Dev';
  address = 'BD';
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, 'start a support session');
  }
}

const ammir = new support('Amnir', 'BD');
const salman = new support('leo messi', 'dubai');
const shakib = new support('shakib', 'USA');
const upo = new support('upo', 'dubai');
/* console.log(ammir);
console.log(salman); */

ammir.startSession();
salman.startSession();

console.log(shakib, upo, salman, ammir)