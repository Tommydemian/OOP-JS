function UserCreator(name, score){
    this.name = name;
    this.score = score;
};

UserCreator.prototype.increment = function(){
    const addOne = () => {
        this.score += 1;
    }
    addOne();
};

UserCreator.prototype.login = function(){
   console.log(this.name + ' has logged in')
};

const user1 = new UserCreator('Phil', 4)
//const user2 = Object.create(UserCreator.prototype)

user1.increment()
console.log(user1)
