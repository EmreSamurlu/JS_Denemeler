let price = 75; //Number veri türü
let tax = 0.18;
let taxPrice = price * tax;

console.log("Fiyat:", price,"KDV:", tax, "KDV Tutarı:", taxPrice);

let total = taxPrice + price;

console.log("Toplam Tutar: ",total, "TL");

// artırma ve azaltma

let counter = 300;
counter += 1;
counter ++;
console.log(counter);

counter --;
console.log(counter);

counter *= 3;
console.log(counter);

counter /= 3;
console.log(counter);

// JS de işlem önceliği vardır!!
console.log(2 + 3 * 10); // cevap 32 
console.log((2 + 3) * 10); // cevap 50

// mod (kalan) hesaplama

console.log( 5 % 3); // 5 in 3 e bölümünden kalanı verir.

// üs alma **
console.log(2 ** 4); // 2 üzeri 4 işleminin sonucunu verir.

// aşağı yuvarlama işlemi Math.floor()
console.log( Math.floor(1.7)); // sonuç = 1 

// yukarı yuvarlama işlemi Math.ceil()
console.log( Math.ceil(1.1)); // sonuç = 2 

// yakına yuvarlama işlemi Math.round()
console.log( Math.round(1.6)); // sonuç = 2 ( .5 den yukarısı bir sonraki sayıya öncesi bir önceki sayıya yuvarlanır.)

// String Number ve Number
let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log(newNumber);