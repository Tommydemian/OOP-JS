function UserCreator(name, score){
    this.name = name;
    this.score = score;
};

UserCreator.prototype.increment = function(){
    this.score ++;
};

UserCreator.prototype.login = function(){
   console.log(this.name + ' has logged in')
};

const user1 = new UserCreator('Phil', 4)
//const user2 = Object.create(UserCreator.prototype)

console.log(user1.name)

// user1 execution context => creates => this = {} => with a hidden bond __proto__ which contains the UserCreator prototype.

// 1. 1 simple rule => when I called a function with a this keyword => I always got to assume that the [this] refers to the left had-side of the .
    //code 
    // function increment(){
    //     this.score++
    // }
    // user20.increment // this is refering to user20


