function createObject(name, score) {
  const newUser = Object.create(functionCreator);
  newUser.name = name
  newUser.score = score
  // newUser.talk = function(){console.log(`${name} has talked..`)}
  return newUser
}

const functionCreator = {
  increment: function () { this.score++ },
  talk: function () { console.log('talking...') }
}


user1 = createObject('tomas', 5)
user2 = createObject('lukas', 4)
user3 = createObject('pablo', 3)

console.log(user1.talk())
console.log(user2)
console.log(user3)

const user4 = new createObject('new user', 7)
console.log(user4)

function greetings(name){console.log('how you doing ' + name)}

const frank = new greetings('frank')
const frank1 = Object.create(greetings)
console.log(frank) 
console.log(frank1) 
// how you doing frank
// greetings {}
// the empty object is => Object.create()

