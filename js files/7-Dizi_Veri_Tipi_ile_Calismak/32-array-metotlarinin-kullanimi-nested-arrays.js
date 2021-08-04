// * Array Metotlarının Kullanımı ve Nested Arrays

let shopList = ["elma", "ekmek", "süt"];

// .push() metodu

console.log("alışveriş listesi: ",shopList);

shopList.push("yumurta");
console.log("alışveriş listesi: ",shopList);
console.log("----");

// .pop() metodu

shopList.pop();
console.log("alışveris listesi(pop): ", shopList)
console.log("----");

// .includes() metodu

const elmaVar = shopList.includes("elma");
console.log(elmaVar);

const armutVar = shopList.includes("armut");
console.log(armutVar);
console.log("----");

// .slice() metodu

const newShopList = shopList.slice(0,2);
console.log(shopList);
console.log(newShopList);
console.log("----");

// .join() metodu

const stringShopList = shopList.join(); // default olarak (,) kullanır.
console.log(stringShopList);

const stringShopList2 = shopList.join(" kiraz "); // parantez içerisine girdiğimiz ifade ile birleştirir
console.log(stringShopList2)
console.log("----");

// .concat() metodu

const foods = ["pasta", "baklava", "puding"];
const drinks = ["su", "kahve"];

const menu = foods.concat(drinks);
console.log(menu);
console.log("----");

// .forEach() metodu

/* forEach kullanımı: 
dizi.forEach(function (diziElemanınınKendisi, Indexi, DizininKendisi) {
    / kod bloğu
}); */

const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function (malzeme, malzemeIndexi) {
    console.log(malzeme, malzemeIndexi);
});

const cars = ["Mercedes", "Hyundai", "Opel", "Peugeot", "Ford"]

cars.forEach((marka, markaSirasi) => {
    console.log(marka, markaSirasi + 1)
});
console.log("----");

// .map() metodu
const sayilar = [1,2,3];

let sayilarin5kati = sayilar.map(function(sayi){
    return sayi*5;
});

console.log(sayilarin5kati);
console.log(sayilar);
console.log("----");

// .some() metodu

const sonuc1 = sayilar.some(function (sayi) {
    return sayi > 2;
});

console.log(sonuc1);

sayilar.push(4,5,6);

console.log(sayilar);

const sonuc2 = sayilar.some(function (sayi) {
    return sayi < 5;
});

console.log(sonuc2);

const sonuc3 = sayilar.some(function (sayi) {
    return sayi > 7;
});

console.log(sonuc3);
console.log("----");

// .every() metodu

const sonuc4 = sayilar.every(function (sayi) {
    return sayi > 3;
});

console.log(sonuc4); // false: tüm sayılar 3 ten büyük değil

const sonuc5 = sayilar.every(function (sayi) {
    return sayi > 0;
});

console.log(sonuc5); // true: tüm sayılar 0 dan büyük.
console.log("----");

// .find() metodu

const bulunacakEleman1 = sayilar.find(function (sayi) {
    return sayi === 5;
});

console.log(bulunacakEleman1);

const bulunacakEleman2 = sayilar.find(function (sayi) {
    return sayi > 5;
});

console.log(bulunacakEleman2);

const bulunacakEleman3 = sayilar.find(function (sayi) {
    return sayi > 10;
});

console.log(bulunacakEleman3); // undefined döner
console.log("----");

// .sort() metodu

const nums = [3,5,2,10,4];
nums.sort();

console.log(nums); // UTF-16 formatında sıralar.

nums.sort(function (a,b) {
    return b-a;
});
console.log(nums); // büyükten küçüğe sıralama

nums.sort(function (a,b) {
    return a-b;
});

console.log(nums); // küçükten büyüğe sıralama
console.log("----");

// .reduce() metodu

const nums2 = [10,20,30];

function reducer(accumulator, num) {
    return accumulator + num;
};

const ans1 = nums2.reduce(reducer, 0);

console.log(ans1); // 0 + 10 + 20 + 30 = 60 bekleriz.

const ans2 = nums2.reduce(reducer, 5);

console.log(ans2); // 5 + 10 + 20 + 30 = 65 bekleriz.

console.log("----");
//* Dizi İçerisinde Dizi Oluşturma

const piknikSepeti = [
    ["elma", 3],
    ["muz", 5],
    ["ekmek", 2]
];

const ilkEleman = piknikSepeti[0];
console.log(ilkEleman);
const ikinciEleman = piknikSepeti[1];
console.log(ikinciEleman)
const ucuncuEleman = piknikSepeti[2];
console.log(ucuncuEleman)

const kacElma = piknikSepeti[0][1];
console.log(kacElma, "tane elma var.");

console.log("----");

let kalemlik = new Array();

kalemlik[0] = new Array("silgi", 2 , "mavi");
kalemlik[1] = new Array("Kalem", 3 , "kırmızı")
kalemlik[2] = new Array("Cetvel", 1 , "siyah");

console.log(kalemlik);

console.log(kalemlik[0][0]);
console.log(kalemlik[0][2]);

console.log("----");
console.log("----");

//* video anlatım ********* farklı olan yerleri ekledik.

// ES6 ile gelen kopyalama işlemi

let copyKalemlik = [...kalemlik];
console.log(copyKalemlik);

let picnicBasket = [...foods, ...drinks]; // ES6 ile birden fazla array yapısını birleştirme.
console.log(picnicBasket);

// .toString ve .join yöntemi

console.log(picnicBasket.toString());
console.log(picnicBasket.join("---"));



console.log("----")
console.log("----")


// Pekiştirme Soruları

console.log("---- Pekiştirme Soruları ----");

// soru 1
console.log("---- 1. Soru. ----")
let dizi = [2,5,8,11,15,17];

let buyuk10 = dizi.filter(function (sayi) {
    return sayi >= 10;
})
console.log(buyuk10);

const carpma = buyuk10.map(function (sayi) {
    return sayi * 5;
})

console.log(carpma);

console.log("---- 1. soru çözüldü. ----");

console.log("----");

// soru 2 //* bir sayıdan büyük olan sonuçları bulma
console.log("---- 2. Soru. ----");
let dizi2 = [3,6,9,14,16];
/* 
let buyuk5 = dizi2.some(function myFunction(sayi) {
    return sayi > 5;
});
console.log(buyuk5)
 */
function myFunction(dizi2) {
    return function(bigvalue){
        return (bigvalue >= dizi2);
    };
};

let result = dizi2.filter(myFunction(5));

console.log(result);
console.log("---- 2. Soru Çözüldü. ----");

console.log("----");

// soru 3 //* sayıların çarpımının sonucu
console.log("---- 3. soru ----");

let dizi3 = [2,3,4];

function carpim(acc, sayi) {
    return acc*sayi ;
}

const answer3 = dizi3.reduce(carpim); // fonksiyonda çarpımları hesapladık reduce ile toplamalarını sağladık.
console.log(answer3);

console.log("--- 3. soru çözüldü. ----")