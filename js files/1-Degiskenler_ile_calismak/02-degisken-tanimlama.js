// var degiskeni eski tiptir. artik pek kullanilmamaktadir.
// var serverName = "www.kodluyoruz.org" ;
// console.log(serverName);

// let ile degiskeni bos tanimlamak
let serverName;

// let ile degiskene bilgi atamak
serverName = 'kodluyoruz.org';
console.log(serverName);

// let ile degiskene bilgi atayarak tanimlamak
let password = "1234";
console.log(password);

// degisken atamasi yapmadan once kullanmaya calismak
/* HATALI KULLANIM
console.log(fullName);
let fullName = "Emre Samurlu" ;
*/
let fullName = "Emre Samurlu" ;

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek
fullName = "Okan Samurlu"
console.log(fullName);

// birlestirme veya ekleme islemi
fullName += " Yeni eklenen bilgi"
console.log(fullName)

// const
/*
const serverPassword ;
serverPassword = "1234" // hatali kullanim !!
*/
// const
const serverPassword = "12345asdf";
console.log(serverPassword);


// Video burada bitti. Kalan kısım yazılı kısımlar.***


// Tek satırda aynı deklarasyon, farklı değişken tanımı örneği
let okulNumarasi = 12 , isim = "Emre";
console.log(okulNumarasi, isim);

// Boolean: Mantıksal İfade, true or false
var isEnable = true;
console.log(isEnable);

// Number: Sayısal ifade, 2^53 - 1 'e kadar değer alabilir.
const PI = 3.14;
console.log(PI);

// BigInt: 2^53 - 1 değerinden büyük değerler atanabilir. (Math.pow(sayı, kuvvet değeri) sayının kuvvetini almak için kullanılır).
let bigIntSayi = Math.pow(2, 53) + 1 ;
console.log(bigIntSayi);

// String: Metinsel İfadeler, "" veya '' işaretleri arasına yazılır.
let isim2 = "Özge", isim3 = 'Emre';
console.log(isim2, isim3);

// Symbol() değeri
let Sym1 = Symbol("Sym");
console.log(Sym1);

// Object = Yukarıda ki 7 veri türü de primitive tiplidir. Objelerde ( nesne, dizi ) gibi referans tipler de değişkenlere atanabilir.
let sayilar = [1,2,3,4];
const kisiler = {
name: "Ahmet",
yas: 12
}
console.log(sayilar,kisiler);
console.log(sayilar, kisiler.yas, kisiler.name); // console.log(kisiler.yas): sadece değeri gösterir.

// var
