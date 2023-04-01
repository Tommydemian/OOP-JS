function userCreator(name, score) {
    const newUser = Object.create(userFuncStore);
    newUser.name = name;
    newUser.score = score;

    return newUser;
};

const userFuncStore = {
  increment: function(){this.score += 1;},
  introduce: function(){console.log(`hello, my name is ${this.name}`);}
};

const larry = userCreator('Larry', 7)
const juan = userCreator('juan', 5)

larry.increment()

console.log(juan.introduce())
console.log(larry)

const paidUserFuncStore = {
  increaseAB: function(){this.accounBalance++}
};

Object.setPrototypeOf(paidUserFuncStore, userFuncStore)

function paidUserCreator(name, score, accounBalance) {
    const newPaidUser = userCreator(name, score) // return newUser = {name, score} => with a __proto__ which bonds this to userFuncStore
    // Now we got a issue => the proto of newPaidUser is pointing to userFuncStore instead of paidUserFuncStore => We nned to fix it.
    Object.setPrototypeOf(newPaidUser, paidUserFuncStore)
    newPaidUser.accounBalance = accounBalance
    return newPaidUser
};

const tomas = paidUserCreator('tomas', 5, 25)

tomas.increaseAB()
tomas.increment()
tomas.introduce()
console.log(tomas)
