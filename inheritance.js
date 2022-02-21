
class teamMember {
  name;

  address = 'BD';
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}








class support extends teamMember {
  groupSupportTime;
  desifnation = 'support Web Dev';
  constructor(name, address, time) {
    super(name, address)
    this.groupSupportTime = time;
  }
  startSession() {
    console.log(this.name, 'start a support session');
  }

}


class studentCare extends teamMember {
  desifnation = 'care Web Dev';
  buildARotine() {
    console.log(this.name, 'Build a Routine', student);
  }
}




class NeptineDev extends teamMember {
  codeEditor;
  desifnation = 'Neptune App Dev';
  constructor(name, address, editor) {
    super(name, address);
    this.codeEditor = editor;
  }
  relaseApp(version) {
    console.log(this.name, 'relase app version', version);
  }
}



const ammir = new support('Amnir', 'BD', 2);
const salman = new support('leo messi', 'dubai', 8);
const shakib = new support('shakib', 'USA', 4);
const upo = new support('upo', 'dubai');

const upoma = new studentCare('Upoma', 'BD');
// console.log(upoma);

const ash = new NeptineDev('Ash', 'UA', 'andddd');
console.log(ash.name);
ash.relaseApp('1.3.4');
