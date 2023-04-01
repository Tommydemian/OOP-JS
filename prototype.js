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

