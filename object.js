const user1 = {
    name: 'John',
    score: 4, 
    increment: function(){
        user1.score++;
    },
    decrement: function(){
        user1.score--;
    }
}
// this is the principle of encapsulation.

user1.increment();
console.log(user1)