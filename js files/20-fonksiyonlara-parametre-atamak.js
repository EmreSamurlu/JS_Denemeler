// Temel kurallar:
// 1: Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir.
// 2: Bir fonksiyon dışarı bilgi gönderebilir (return) veya göndermeyebilir.
// 3: Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir.
// 4: Dışardan değişken bilgisi almak sağlıklı bir kullanım değil. Parametre kullanılmalı...

/* 
let firstName = "Lorem"

function greetings (firstName = "", lastName ="") { // default parametre alıyor.
    // console.log(`Merhaba ${firstName ? firstName : ""}`)
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
}

console.log(firstName) // değişken
greetings() // fonksiyona parametre göndermedik???
greetings("Emre", "Samurlu")

function greetings2 (firstName, lastName){
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")
console.log(greetingsInfo)

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red"> Color Red</span>`

domIdWriteInfo('info', htmlInfo)

domIdWriteInfo('greeting', greetings2("Emre", "Samurlu"))
 */
/*  //* örnek 1
let toplam = (a, b) => {
    return a + b
}

console.log(toplam(3,7))

 */
/*  //* örnek 2
const PI = 3.14;
function circleArea(r) {
    let result = PI * r * r;
    return result;
}

let returnedResult = circleArea(4);
console.log(returnedResult)
 */
//* recursion pattern
/* 
const PI = 3.14;
let circleArea = (r) => {return PI * r * r};
console.log(circleArea(5));
 */


//* örnek 3 */
function circleArea(r, PI = 3.14) {
    return PI*r*r;
}

function carpma(a1, a2) {
    return alan1*alan2;
}

let alan1 = circleArea(5);
let alan2 = circleArea(6);

let returnedResult = carpma(alan1, alan2);

console.log(returnedResult);