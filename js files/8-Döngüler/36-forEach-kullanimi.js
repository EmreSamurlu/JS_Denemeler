// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://www.w3schools.com/jsref/jsref_foreach.asp
// https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/

//* Video örnekler

const PRODUCTS =  ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard",]

// PRODUCTS.forEach((product, index, array) => console.log(product, index, array[index]));
PRODUCTS.forEach((product, index, array) =>array[index] = `${product.toUpperCase()}`);

console.log(PRODUCTS)
/*
const userListDOM = document.querySelector('#userList')
for (index = 0; index < users.length; index++){
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index];
    userListDOM.appendChild(liDOM);
}
 */

const userListDOM = document.querySelector('#userList');

PRODUCTS.forEach(item =>{
    const liDOM = document.createElement('li')
    liDOM.innerHTML = item;
    userListDOM.append(liDOM);
})





// * Yazılı kaynak
/* 
const animals = ["cat", "dog", "bird", "horse"];

// animals.forEach((value, index, array) => {
//     console.log('value: ', value);
//     console.log('value parametresinin aldığı index: ', index);
//     console.log('array: ', array);
// });

animals.forEach( animal => console.log(animal));  // ES6 arrow function gösterimi

//* ForEach kullanarak yeni bir array oluşturma.

const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function (numbers) {
    newArray.push(numbers*3);
});

console.log(newArray);

const secondArray = []; 
numbers.forEach(function (numbers) {
    secondArray.push(numbers + 2);
});

console.log(secondArray) */