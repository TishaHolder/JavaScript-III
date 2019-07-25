/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: This refers to the window/console Object when in the global scope.

* 2. Implicit Binding: When a function is called preceded by a dot, the this keyword refers to all of the properties and methods of the object to the left of the dot.

* 3. New binding: When a constructor function is used to create an oject, for e.g. const newPerson =  new Person(), this refers to newPerson or the specific object that is created  by the Person constructor function. 

* 4. Explicit binding: .call(), .apply(), or .bind() methods are used to override or control the specific object that "this" refers to. For e.g. .call(), .apply() or .bind() can be used to have "this" refer to another object besides newPerson => const newPerson =  new Person(). newPerson.speak.call(oldPerson) / newPerson.speak.apply(oldPerson) changes the reference of "this" to the oldPerson object.

*
* write out a code example of each explanation above
*/

// Principle 1
//code example for Window/Global Object Binding
function sayName(name) {
    console.log(this);// this will output the window/console object
    return name;
  }

  sayName("Tisha");

// Principle 2
// code example for Implicit Binding
const tishaObj = {
    name: 'Tisha',
    sayMyName: function() {
      console.log(`My name is ${this.name}`);
      console.log(this);
    }
  };

  tishaObj.sayMyName();

// Principle 3
// code example for New Binding
function Person(name) {
    this.msg = 'I am ';
    this.name = name;
    this.introduce = function() {
      console.log(this.msg + this.name);
      console.log(this);
    };
  }
  
  const jazlene = new Person('Jazlene');
  const tyrese = new Person('Tyrese');
  
  jazlene.introduce();
  tyrese.introduce();

// Principle 4
// code example for Explicit Binding
function Person(name) {
    this.msg = 'I am ';
    this.name = name;
    this.introduce = function() {
      console.log(this.msg + this.name);
      console.log(this);
    };
  }
  
  const jim = new Person('Jim');
  const bob = new Person('Bob');
  
  jim.introduce.call(bob); 
  bob.introduce.apply(jim);

console.log("******************************************************************");

