let user1 = {
    firstName: "Emre",
    lastName: "Samurlu", // Object içine string ve number bilgisi eklenebilir.
    age: 28,
    score: [1, 2, 3, 4], // Object içine array eklenebilir.
    isActive: true, // Object içine boolean eklenebilir.
    shortName: function () {
        return `${this.firstName[0].toUpperCase()}. ${this.lastName.toUpperCase()}`;
    },// Object içine Fonksiyon eklenebilir. (Metot kullanımı!!)
};

console.log("Bütün Object:" ,user1);
console.log("İsim - Soyisim:" ,user1.firstName, user1.lastName.toUpperCase());
console.log("Yaş:" ,user1.age);
console.log("Kısa İsim:" ,user1.shortName());

//* *//

console.log("----");

const fonksiyonAdi = () => {console.log("Merhaba Kodluyoruz")};

console.log(fonksiyonAdi.name); // çıktı: fonksiyonAdi

console.log("----");

function Insan(isim, yas) {
    this.isim = isim;
    this.yas = yas;
}

const ali = new Insan("ali", 21);
console.log(ali)
console.log(ali.isim)
console.log(ali.yas)


console.log("----");

ali.soyIsim = "Metin";
console.log(ali.soyIsim);

console.log(ali)

console.log("----");

Insan.prototype.yeniFonksiyon = () => {console.log("Merhaba Kodluyoruz.")}
const ayse = new Insan("ayşe", 22);
ayse.yeniFonksiyon();

console.log("----");

ayse.__proto__.enYeniFonksiyon = () => {console.log("Tekrar Merhaba Kodluyoruz!")}
ayse.enYeniFonksiyon();

console.log("----");

ali.__proto__.secondFonksiyon = () => {console.log("Hello Patika")}
ali.secondFonksiyon();