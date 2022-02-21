const fish = { name: 'king Hilsha', id: '23', price: 5000, phone: "0142655652", address: 'chanpur', dress: 'silver' };

/* const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
const id = fish.id; */

const { phone, price, dress, id } = fish;
/* 
console.log(phone);
console.log(phone, id);
console.log(phone, price);
console.log(phone);
 */

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

/* const work = company.web.work;
const framework = company.web.framework; */

const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;

console.log(work, framework, food, second, third);
