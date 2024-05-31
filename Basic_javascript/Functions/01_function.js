// function myName(){

//     console.log("Jamal Ashraf");
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}

// console.log(addTwoNumbers(57,78));
// const result = addTwoNumbers(3,5);
// console.log(result)

// console.log(addTwoNumbers());

function isLoggedIn(username){
    if(username === undefined){
        console.log("Please enter the username");
        return
    }
    return  `${username} just Logged in`;
}
// const result = isLoggedIn();
// console.log(result);  // It will Print undefined logged in
// console.log(isLoggedIn(""));   // It will print just logged in
// console.log(isLoggedIn("Jamal")); // It will  print Jamal just Logged in

function calculateCartPrice(...num1){   // ... is called rest opertator
    let sum = 0;
    for(i = 0 ; i<num1.length ; i++){
        sum = sum+num1[i];
    }
    return `Your total bill is ${sum}`
    // return num1;
}
// console.log(calculateCartPrice(560, 200 , 300, 400 , 500))

const user1 ={
    username : "John",
    price : 199
}
const user2 = {
    username : "Ironman",
    price : 566
}
function CheckUser(anyobject){
    return `Username is ${anyobject.username} and Price is ${anyobject.price}`
}
// console.log(CheckUser(user2));
// console.log(CheckUser({
//     username: "Spiderman",
//     price : 1299
// }))

let numbers = [100,200,300,400,500];
let array = [200,400,500,600];
function secondNumberOfArray (getArray){
    return getArray[1]
}
console.log(secondNumberOfArray(array));
console.log(secondNumberOfArray([500,1000,2000,4000]));