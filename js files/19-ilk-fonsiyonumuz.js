/* 
function helloWorld() {
    console.log("Hello World")
}

function hello() {
    console.log("Merhaba")
    helloWorld()
}
 */
// Hata alabilir..
/* function userCheck() {
    if (userName && age >= 18){
        info.innerHTML = "ehliyet alabilirsiniz"
    } else if (!userName) {
        info.innerHTML = "Kullanıcı Adınız Yok."
    }else if (!(age >= 18)) {
        info.innerHTML = "Yaş bilginiz yok veya 18 yaşından küçüksünüz!!"
    }
} */

// hello() // çalıştırma komutu

//* önce fonksiyonu tanımladık sonra bir değişken ile kullanıcıdan isim girmesini istedik. daha sonra bu ismi karşılama ekranına yazdırdık. *//
/* 
function printHello(name) {
    info.innerHTML = `Merhaba ${name.toUpperCase()},`

}

let greeting = printHello(prompt("Lütfen Adınızı Giriniz"))
 */
/*
let s1 = 5;
let s2 = 7;

function add(){
    let s3 = 3 ;
    return s1 + s2 + s3;
}

console.log(add());
 */
/* 
function multi() {
    return s1 * s3;
}

console.log(multi()); 
 */
// burada hata almamızın sebebi s3 değişkeninin global olmaması, yani function add() içinde tanımlanmış olmasıdır.


//* farklı sıralarda fonksiyon çalıştırmak
/* 
function printScreen1 (){
    console.log("İlk ekran çıktısı");
}

function printScreen2 (){
    setTimeout(function(){
console.log("İkinci ekran çıktısı")  
}, 3000);
}

function printScreen3 (){
    console.log("Üçüncü ekran çıktısı");
}
printScreen1();
printScreen2();
printScreen3();
 */
/* 
function mesajVer() {
    alert( 'Herkese Merhabalar!' );
    }
    mesajVer();
    mesajVer();

 */
/*  //*kısa fonksiyon yazımı
let square = (sayi) => sayi * sayi;

console.log(square(5));

 */
/* 
let toplam = (a, b) => {
    let result = a + b;
    return result;
};

console.log(toplam(3,5))
 */
/* 
let experience = prompt('Kac yillik gelistirici tecrubeniz var', 4);

const developer =
experience < 5
    ? () => alert('Bir cok konuyu biliyorum')
    : () => alert('Hicbir sey bilmiyorum:)');

developer();
 */
/* 
let s1 = 5;
let s2 = 6;

const toplam = (s1, s2) => {
    let result = s1 + s2;
    console.log(result);
}

 */
//*recursion*//
// bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın

//pow(2, 2) = 4
//pow(2, 3) = 8
//pow(2, 4) = 16 değerlerini verecek diyelim.

//* 1. yol - recursion pattern ile düşünmeden
/* 
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n ; i++){
        result *= x;
    }

    return result;
}
console.log(pow(3, 5));
 */
//* 2. yol - recursion pattern ile 
/* 
function pow(x, n) {
    if (n == 1){
        return x;
    }else{
        return x * pow(x, n - 1)
    }
    
}

console.log(pow(3, 5))

 */

//** recursion en kısa yol  */
/* 
let pow = (x, n) => {
    return n == 1 ? x : x * pow(x, n - 1);
}

console.log(pow(3, 5))
 */

//* nested functions 

function sayacartir() {
    let sayac = 0;

    return function (){
        return sayac++;
    };
}

let sayici = sayacartir()

console.log(sayici());
console.log(sayici());
