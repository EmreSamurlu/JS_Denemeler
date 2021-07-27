let isActive = false // 0
isActive = true // 1 
console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);

Boolean("11") // true
Boolean("0") // true
Boolean("") // false

userName = "user";
console.log("User Name:", Boolean(userName));

// 0, -0, null, false, NaN, undefined, ("") ->
Boolean(0) // false
Boolean(-0) // false
Boolean(-0.1) // true
Boolean(0 === 0) // true

Boolean(userName.length > 0) // true
console.log(Boolean(userName.length)); // true

// denemeler

console.log(Boolean(1n));
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));