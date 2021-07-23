// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors

let title = document.getElementById('title');
title.innerHTML = "Değişen Bilgi"
console.log(title.innerHTML);

let link = document.querySelector("ul#list>li>a")
link.innerHTML += " değişti"
console.log(link);