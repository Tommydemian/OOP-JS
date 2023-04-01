function createObject(name, score) {
    const newUser = {}
    newUser.name = name
    newUser.score = score
    // newUser.talk = function(){console.log(`${name} has talked..`)}

    return newUser
}

user1 = createObject('tomas', 5)
user2 = createObject('lukas', 4)
user3 = createObject('pablo', 3)

console.log(user1)
console.log(user2)
console.log(user3)

// its not scalable because you can't create a single copy of the function for every object you create
// better approach:

function userTalks(user) {
    if (user.name) {
        return `${user.name} has talked`
    }
}

console.log(userTalks(user1))

