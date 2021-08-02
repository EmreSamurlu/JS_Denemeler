// array ile çalışmak

// Array Oluşturmak
let domain = "kodluyoruz";
let isActive = false;
let items = [15 ,25 ,35, isActive, domain ]

console.log(items)

let emptyArray = [] // boş liste

// Array içerisindeki eleman-öğe sayısısını öğrenmek
console.log(items.length) // array içindeki öğe sayısı

//* document.querySelector('#info').innerHTML = items.length

// Array içindeki ilk elemanın çağırılması
console.log(items[0])

// Array içindeki orta elemanın çağırılması
console.log("ortadaki: ",
    items[ Math.floor(items.length / 2)]
)

// Array içindeki son elemanın çağırılması
console.log(items[items.length - 1])

// Değişken içindeki bilginin array olup olmadığını kontrol etmek

console.log(typeof(items)) // object olarak çıktı veriyor

console.log(
    Array.isArray(items)
)

// Hangileri isArray bilgisidir

console.log(
    "[]:", Array.isArray([])
)

console.log(
    "1 : ", Array.isArray(1)
)

console.log(
    "true : ", Array.isArray(true)
)

// forEach 
items.forEach((item, index) => {
    console.log("forEach:", item, index);
});