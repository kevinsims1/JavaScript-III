/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding - When in the global scope, the value of 'This' will be the window/console Object;
* 2. Implicit Binding - When a function is called by a preceeding dot, the object before the dot is 'This';
* 3. New Binding - Whenever a constructor function is used(passed as a param), this refers yo the specific instance of the object that is created and returned bt the constructor function.
* 4. Explicit binding - Whenever ".call" or ".apply" are used "This" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
function sayName(name) {
    console.log(this);
    return name;
};
sayName("Kev");

// code example for Window Binding

// Principle 2
const myObject = {
    greeting: 'hello',
    sayHello: function (name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this)
    }
}
myObject.sayHello('ryan');


// code example for Implicit Binding

// Principle 3
function CordialPerson(greeter) {
 this.greeting = 'Hello ';
 this.greeter = greeter;
 this.speak = function() {
   console.log(this.greeting + this.greeter);
   console.log(this);
 };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak()

// code example for New Binding

// Principle 4


// code example for Explicit Binding