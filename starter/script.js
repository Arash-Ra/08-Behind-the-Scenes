'use strict';

/*
var me = 'Arash1';
let job = 'Technician';
const year = 1991;

console.log(me);
console.log(job);
console.log(year);
*/
// cannot use arrow function before it

/*
console.log(addArro(3, 8));
const addArro = (a, b) => a + b;

*/

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You,${firstName}, are ${age} and born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1970 && birthYear <= 1979) {
      const str = `Oh! You are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        console.log(arguments);
        return a + b;
      }
      console.log(add(2, 5));
    }
  }

  printAge();
  return age;
}

const firstName = 'arash';
console.log(calcAge(1976));
*/

/*
const arash = {
  firstName: 'arash',
  lastName: 'Rahebi',
  birthYear: 1976,
  age: function () {
    return 2030 - this.birthYear;
  },
};

console.log(arash.age());
*/

// var firstName = 'Matilda';

/*

const arash = {
  firstName: 'arash',
  year: 1991,

  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // solution 1
    // const self = this;
    // console.log(self);
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // solution 2
    // 'this' keyword used it's psrent property. and it's parent is CalcAge which has access to 'arash' object because it is decleration funtion
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  // this keyword in arrow function uses the property of global property
  //   greet: () => console.log(`Hey ${this.firstName}`),

  //   greet: function () {
  //     console.log(`Hey ${this.firstName}`);
  //   },

  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

arash.calcAge();
arash.greet();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 4);
addExpr(2, 4, 8, 9);

// argument for the arrow function does not exist
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 4, 9);

*/

let age = 30;
let oldAge = age;
age = 31;

console.log(`age = ${age}`);
console.log(`oldAge = ${oldAge}`);

const me = {
  name: 'arash',
  age: 30,
};

const friend = me;

console.log(me);
console.log(friend);
console.log(`after changing friend age=============`);

friend.age = 27;
friend.name = 'bob';

console.log('me object:');
console.log(me);

console.log('friend object:');
console.log(friend);

///////////////////////////////////////////
me.age = 45;
me.name = 'alex';

console.log('me object:');
console.log(me);

console.log('friend object:');
console.log(friend);

let job = 'Technician';
