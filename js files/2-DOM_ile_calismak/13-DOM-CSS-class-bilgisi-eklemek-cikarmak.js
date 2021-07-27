// *DOM'a CSS Class Bilgisi Eklemek veya Çıkarmak

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") // birden fazla class eklemek


greeting.classList.remove("title", "second-class", "third-class") // birden fazla class silmek.

console.log(greeting.classList);
console.log(greeting.classList.item(0)); // *çıktı: text-primary

console.log(greeting.classList.contains('new-info')); // *çıktı: true -- element verilen class'ı içeriyor.
console.log(greeting.classList.contains('emre')); // *çıktı: false -- element verilen class'ı içermiyor.

// .toggle('') metodu olmayan class ı ekler. olan class ı siler. **
greeting.classList.toggle('emre');
console.log(greeting.classList)

greeting.classList.toggle('emre');
console.log(greeting.classList)

// .replace() : Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanılır.

greeting.classList.replace('new-info','block');
console.log(greeting.classList)

console.log(greeting.classList.length); // *bir öğede bulunan sınıf sayısını bilmemizi sağlat // çıktı: 2

