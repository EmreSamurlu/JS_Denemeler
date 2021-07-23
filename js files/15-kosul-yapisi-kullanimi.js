//***** */ Koşul Yapısı Kullanımı */ *****//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
/*
let userName = prompt("Kullanıcı Adınızı Giriniz:")
//* eğer kullanıcı bilgisi varsa ekrana ismini yazdır.

// eğer (userName.length > 0) {console.log(userName)} değilse {console.log("Bilgi Yok!!")}

//* if (userName.length > 0) {console.log(userName)} else {console.log("Bilgi Yok!!")}


if (userName.length > 0){ // if kısmı her zaman doğru ise çalışır.
    console.log(`Kullanıcı Bilginiz ${userName}`)
}else{
    console.log(`Bilgi Yok!!!`)
}

*/

//* sayıların büyük küçük karşılaştırması.

/* var num1 = Number(prompt("Birinci Sayıyı Giriniz:")); // prompt ile giriş yapıldığı için string olarak algılar bu yüzden Number() olarak deklare edilmelidir.
var num2 = Number(prompt("İkinci Sayıyı Giriniz:"));

if (num1 > num2){
    alert(num1 + " sayısı " + num2 + " sayısından büyüktür.");
}else if (num1 === num2){
    alert(num1 + " sayısı " + num2 + " sayısına eşittir.");
}else{
    alert(num1 + " sayısı " + num2 + " sayısıdan küçüktür.");
}; */

//* Örnek Vize notu hesabı

/* let ogrVizeNot = Number(prompt("Vize notu giriniz:"));
let ogrFinalNot = Number(prompt("Final notu giriniz:"));

let ogrOrt = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if(ogrOrt >= 0 && ogrOrt <= 30) {
    alert("Not Ortalamanız: " + ogrOrt + " BAŞARISIZ(FF).");
}else if(ogrOrt >= 31 && ogrOrt <= 49) {
    alert("Not Ortalamanız: " + ogrOrt + " DD - KOŞULLU.");
}else if(ogrOrt >= 50 && ogrOrt <= 59) {
    alert("Not Ortalamanız: " + ogrOrt + " DC - GEÇTİNİZ.");
}else if(ogrOrt >= 60 && ogrOrt <= 69) {
    alert("Not Ortalamanız: " + ogrOrt + " CC - GEÇTİNİZ.");
}else if(ogrOrt >= 70 && ogrOrt <= 79) {
    alert("Not Ortalamanız: " + ogrOrt + " CB - GEÇTİNİZ.");
}else if(ogrOrt >= 80 && ogrOrt <= 89) {
    alert("Not Ortalamanız: " + ogrOrt + " BB - GEÇTİNİZ.");
}else if(ogrOrt >= 90 && ogrOrt <= 94) {
    alert("Not Ortalamanız: " + ogrOrt + " BA - GEÇTİNİZ.");
}else if(ogrOrt >= 95 && ogrOrt <= 100) {
    alert("Not Ortalamanız: " + ogrOrt + " AA - GEÇTİNİZ.");
}; */


//* TAHMİN OYUNU

/* let randomSayi = Math.floor(Math.random() * 10 + 1);

let tahmin = Number(prompt("Bir sayı giriniz!!"));

if (tahmin === randomSayi && tahmin != null) {
    alert("Tebrikler!! Doğru Tahmin!!");
}else if (tahmin == "") {
    alert("Hata! Lütfen 1 ile 10 arasında bir sayı giriniz!!");
}else if (tahmin == null){
    alert("Lütfen bir sayı giriniz!");
}else{
    alert(":( Tekrar Deneyin !, Rastgele sayı: " + randomSayi);
} */

//* Vücut Kitle İndeksi

/* let kg = Number(prompt("Lütfen Kilonuzu Giriniz!", "Örnek: 80"));
let boy = Number(prompt("Lütfen Boyunuzu Metre Olarak Giriniz!", "(Örnek: 1.75)"));

function vkiHesap(kg, boy) {
    let vki = kg / (boy * boy);
    vki = Number(vki.toFixed(2));
    if(vki < 18.5){
        return alert(`Vücut Kitle İndeksiniz: ${vki}, değerleriniz düşüktür!!`);
    }else if(vki >= 18.5 && vki <= 24.9){
        return alert(`Vücut Kitle İndeksiniz: ${vki}, değerleriniz normal :)`);
    }else if(vki >= 25 && vki <= 29.9){
        return alert(`Vücut Kitle İndeksiniz: ${vki}, değerleriniz yüksek! (Kilolu olabilirsiniz.)`);
    }else if(vki >= 30) {
        return alert(`Vücut Kitle İndeksiniz: ${vki}, değerleriniz çok yüksek!! (Aşırı Kilolu)`);
    }else{
        return alert(`Girdiğiniz değerleri kontrol ediniz!!`);
    }
}
vkiHesap(kg, boy); */

//* HackerRank Weird - Not Weird (Day 3: Intro to Conditional Statements)


/*     let n = Math.floor(Math.random() * 100 + 1);
    console.log("n: " + n)
    if (n%2 === 0 && n>=2 && n<=5) {
        console.log("Not Weird")
    }else if(n%2 === 0 && n >= 6 && n <= 20 ){
        console.log("Weird")
    }else if(n > 20 && n%2 === 0){
        console.log("Not Weird")
    }else{
        console.log("Weird");
    }   */

