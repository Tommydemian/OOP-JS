class User{
    constructor( name, score ){
        this.name = name;
        this.score = score;
    }
    incremnt(){
        this.score++;
    }
    introduce(){
        console.log('hello my name is ' , this.name);
    }
    // Behind the scenes: userCreator :{prototype: increment f, introduce f}
}

const user1 = new User('Philipp', 22) 
const user2 = new User('Luka', 34) 

class PaidUser extends User {
    constructor(paidName, paidScore, accounBalance){
        super(paidName, paidScore)
        this.accounBalance = accounBalance;
    }
    increaseBalance(){
        this.accounBalance++;
    }
}

const paidUser1 = new PaidUser('Luka', 34, 80)

paidUser1.increaseBalance()
console.log(paidUser1)

