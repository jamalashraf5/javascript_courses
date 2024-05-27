// let firstName = "Jamal";
// let lastName = " Ashraf";
// console.log(firstName + lastName); // to concatenate the two or more strings use + sign
// console.log(`The First Name is ${firstName} and the last name is ${lastName}`); // This will be use mostly time to print the strings values using some lines.
// console.log(firstName.concat(lastName));  // also can use concat() method to concatenate the two strings
// console.log(firstName.length);

let myUniversity = "Maulana Azad National Urdu University";

console.log(myUniversity.length);

// console.log(myUniversity.charAt(15)); // to find the  character at index which we will pass inside the charAt method
console.log(myUniversity.indexOf('a')); // It will give the character at the specified position which will meet the first 

let newString = myUniversity.substring(0,13);
console.log(newString);

let anotherNewString = myUniversity.slice(9,13);
console.log(anotherNewString);