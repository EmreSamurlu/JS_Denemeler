// *KARŞILAŞTIRMA OPERATÖRLERİ VE MANTIKSAL OPERATÖRLER
let price = "100";
let user = "emre";

//* == eşitse

console.log("== :",price == 100);
console.log("== :",price == 1);

//* === Hem değeri Hemde Türü eşitse

console.log("=== :",price === 1);
console.log("=== :",price === 100);

//* != eşit değilse
console.log(user != "guest");

//* < Küçükse
console.log("price < 100:", price < 100);

//* <= Küçük veya eşitse
console.log("price <= 100:", price <= 100);

//* > Büyükse
console.log("price > 100:", price > 100);

//* >= Büyük veya Eşitse
console.log("price >= 100:", price >= 100);

//* && ve
console.log("price = 3");
price = 3
console.log("&& (ve): ",price < 0 && user != "guest");
console.log("&& (ve): ",price > 0 && user != "guest");

//* || veya 
console.log("|| (veya): ",price > 0 || user != "guest");


//* ! değil (tersi)
user = "guest";
price = 4;

console.log("user: guest, price: 4;")
console.log(price > 0 && !user == "guest");
