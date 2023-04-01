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