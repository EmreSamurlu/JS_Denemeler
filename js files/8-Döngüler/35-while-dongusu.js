// * While Döngüsü
/* 
let counter = 0;
while(counter < 10){
    console.log(counter);
    counter ++;
}
 */

let userName ="";
while(!userName){
    userName = prompt("Kullanıcı adı giriniz.")
    let LI_DOM = document.createElement('li');
    LI_DOM.innerHTML = userName;
    UL_DOM.append(LI_DOM)
}

// * While döngüsünde, verilen koşul sağlanana kadar çalışır. örn: userName Bilgisi elde edilene kadar çalış.

//
/* 
var arabalar = ['Honda', 'Mercedes', 'BMW', 'Fiat', 'Renault'];
var i = 0;
while (arabalar[i]) {
console.log(arabalar[i]);
i++;
}

var degisken = 1;
// burada sınırlandırma verebilmek için bir degisken atiyoruz.

while (degisken <= 10){
// olusturduğumuz değişkeni koşul olarak ekliyoruz.
console.log("değişkenin değeri: " + degisken)
degisken++; // döngü sonsuz olmaması için değişkeni artırıyoruz.
} */