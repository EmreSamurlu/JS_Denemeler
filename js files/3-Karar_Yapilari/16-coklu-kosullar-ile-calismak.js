// ****** Çoklu Koşullar İle Çalışmak ******

/* 
let userName = prompt("Kullanıcı Adınız");
let age = prompt("Yaşınız: ")
let info = document.querySelector("#info"); 
*/

// if - else if kullanımı



if (userName && age >= 18){
    info.innerHTML = "Ehliyet Alabilirsiniz :)";

}else if (!userName) {
    info.innerHTML = "Hata! Kullanıcı Adı Giriniz.";
    info.style.color = "red";

}else if (!(age >= 18)) {
    info.innerHTML = "Hata! Yaş Biliginiz Yok veya 18 Yaşından Küçüksünüz!";
    info.style.color = "red";

}; 



// switch kullanımı
//* Switch kullanımı basit döngülerde oluyor. case içine if-else deki gibi uzun işlemler yazılamadığı için her durumda kullanılamıyor.
/* 

let islem = function(a, b, operator) {
    switch(operator) {
        case 'topla':
            return a + b;
        break;
        case 'cikar':
            return a - b;
        break;
        case 'carp':
            return a * b;
        break;
        case 'bol':
            return a / b;
        break;
        default:
            return 'Tanimlanmamis islem';
        break;
    }
};
console.log(islem(23, 14, 'topla'));  
console.log(islem(10, 3, 'mod'));    

 */

