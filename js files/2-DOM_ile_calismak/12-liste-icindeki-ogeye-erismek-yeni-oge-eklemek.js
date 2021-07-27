// *liste içindeki öğeye erişmek ve yeni öğe eklemek

// let lastChild = document.querySelector("ul#list>li:last-child");
// lastChild.innerHTML = "son öğe değişti..."

// let firstChild = document.querySelector("ul#list>li:first-child");
// firstChild.innerHTML = "ilk öğe değişti..."

// let ulDOM = document.querySelector("ul#list");
// let liDOM = document.createElement('li')

// liDOM.innerHTML = "Kendi Oluşturduğumuz Öğe"

// ulDOM.append(liDOM); // *en sona ekliyor.
// ulDOM.prepend(liDOM); // *en başa ekler.

var liste = document.querySelector("ul");

var urun = document.querySelector("#veri");
var ekle = document.querySelector("#ekle");

ekle.addEventListener("click", function(){
    var li = document.createElement("li");

    li.textContent = veri.value;

    liste.appendChild(li);

    veri.value = "";
});