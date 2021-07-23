// Prompt ile Kullanıcıdan Bilgi Almak //
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

/* 
let fullName = prompt("Lütfen isim giriniz.")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:blue">${fullName.toUpperCase()}</small>` 
*/

let kilo = prompt("Kilonuzu giriniz.", "Örnek: 72 (kg)")
let boy = prompt("Boyunuzu giriniz.", "Örnek: 1.8 (m)")

let soru1 = document.querySelector("#soru1")
let soru2 = document.querySelector("#soru2")

soru1.innerHTML = `${soru1.innerHTML} ${boy}.`
soru2.innerHTML = `${soru2.innerHTML} ${kilo}.`



