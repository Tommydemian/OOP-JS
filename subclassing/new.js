function UserCreator(name, score){
    this.name = name;
    this.score = score;
}

UserCreator.prototype.increment = function(){this.score += 1};
UserCreator.prototype.introduce = function(){console.log('Hello, my name is ', this.name)};

const user1 = new UserCreator('Jonh', 4);
// WHAT new DOES UNDER THE HOOD:
// const user3 = Object.create(UserCreator.prototype);
// user3.name = 'flacko';
// user3.score = 4;
const user2 = new UserCreator('Romina', 4);

function PaidUserCreator(paidName, paidScore, accounBalance){
  const newPaidUser = UserCreator('Jorge', 23)
}

const paidUser1 = new paidUserCreator('Alan', 23, 40)

