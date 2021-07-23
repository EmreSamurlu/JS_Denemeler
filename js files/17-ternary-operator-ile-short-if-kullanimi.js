//******** Ternary Operatör İle Short If Kullanımı ********/

// eğer kullanıcı adın varsa yazdır yoksa kullanıcı bilgisi bulunamadı yaz.
/* 
let userName = prompt("Kullanıcı Bilgisini Yazınız.")
let info = document.querySelector("#info")

// ternary kullanımı:
// kosul ? doğruysa : yanlışsa

info.innerHTML = `${userName ? userName : "Kullanıcı Bilgisi Bulunamadı"}`
 */

// Ternary Operatör Zincirleme kullanımı

let money = Number(prompt("Para miktarı giriniz.(TL)", "Ör: 50"))
let info = document.querySelector("#info")

let canBuy =
    (money < 20) ? "Miktar Yeterli Değil..":
    (money >= 20) ? "Miktar Yeterli..":
    "Para Miktarı Girilmelidir..";
info.innerHTML = `${money} Lira : ${canBuy}`