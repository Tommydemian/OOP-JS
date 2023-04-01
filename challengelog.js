function makePerson(name, age) {
	const obj = {};
    obj.name = name;
    obj.age = age;
    return obj;
}

console.log(makePerson('Sally', 48))

const personStore = {
	greet: function(){console.log("hello")}
};
// personStore => func store.

function personFromPersonStore(name, age) {
    const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
}
// personFromPersonStore => personStore prototype init.



// Challenge 4
// Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".
const sandra = personFromPersonStore('Sandra', 26);
personStore.introduce = function(){console.log('Hi, my name is ' + this.name)}

console.log(sandra.introduce())

function PersonConstructor() {
    this.greet = function (){
        console.log('hello')
    }
	// add code here
}

const james = new PersonConstructor();
const simon = new PersonConstructor();
console.log(james.greet())
console.log(simon.greet())

function personFromConstructor(name, age) {
	this.name = name
    this.age = age
}
const omar = new personFromConstructor('omar', 67)

console.log(omar)

PersonConstructor.prototype.introduce = function(){console.log("Hi, my name is " + this.name )}
const pablo = new PersonConstructor()

console.log(pablo.introduce())