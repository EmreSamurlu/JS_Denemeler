//* object nedir? nasıl oluşturulur?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


let arrayObj = [1,2,3];
let object1 = {obj: 1};

console.log("arrayObj", typeof(arrayObj))
console.log("object1", typeof(object1))
console.log("object1", object1);

let item1 = new Object();
let item2 = {};

console.log("item1", typeof(item1));
console.log("item2", typeof(item2));

let item3 = {}
let item4 = new Object()

let countriesTalkSpanish = {
    continent: "South America",
    language: "Spanish"
};

//* Object.create Yöntemi

let uruguay = Object.create(countriesTalkSpanish);
uruguay.capital = "Montevideo";
uruguay.language = "Spanish";

console.log(uruguay);
console.log(uruguay.capital);