//* DOM Events ile Çalışmak
//* https://www.w3schools.com/jsref/dom_obj_event.asp
//* https://developer.mozilla.org/en-US/docs/Web/Events

/* 
let greeting = document.querySelector("#greeting")
 */
//* mouse etkinliği

// 1. metot

/* 
    greeting.addEventListener("click", function () {
        console.log("Etkinlik Denetlendi.")
    })
 */

// 2. metot

/* 
greeting.addEventListener("mouseover", domClick)

function domClick() {
    console.log("etkinlik denetlendi")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}
 */

/* 
//* klavye etkinliği /// nasıl çalıştığını gör.. eventler bitmedi aynı çalışmaya devam et. (20.07.2021)

const keyboard = document.querySelector("#info");

//* Events

keyboard.addEventListener("copy", cuttingFunction);
keyboard.addEventListener("cut", cuttingFunction);
keyboard.addEventListener("paste", cuttingFunction);

//* Daha farklı eventler mevcut

function cuttingFunction(event) {
    console.log("etkinlik tipi: ", event.type);
}

 */

//* Form etkinlikleri

const color = document.querySelector("#select");
color.addEventListener("change", selectBox);

function selectBox(event){
    console.log("Etkinlik Tipi : " + event.type);
    console.log("değer : " + event.target.value);
}