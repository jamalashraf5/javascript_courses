let user = {
    username: "Jamal",
    price: 999,
    welcomeMsg: function (){
        console.log(`${this.username}, welcome to Our Website`)
        // console.log(this);
    }
}
// user.welcomeMsg();
// console.log(this); // In node environment it give the empty object but in the browser it will give the Window Object because in the browser Window is glonbal object

// function checkThis(){
//     console.log(this);
// }
// checkThis();

// const checkThis = function (){
//     console.log(this);
// }
// checkThis();

// const chechThis = () => {    // Arrow Function
//     console.log(this);
// }
// chechThis()

// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// }

const addTwo = (num1, num2) => num1+num2;  //This is implicit return
console.log(addTwo(56,67));