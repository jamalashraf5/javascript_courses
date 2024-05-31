// let localDate = new Date();
// console.log(localDate);
// console.log(localDate.toString());
// console.log(localDate.toDateString());
// console.log(localDate.toISOString());
// console.log(localDate.toJSON());
// console.log(localDate.toLocaleDateString());
// console.log(localDate.toLocaleString());

const localDate = new Date();
const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' };
console.log(localDate.toLocaleTimeString('en-US', options));
