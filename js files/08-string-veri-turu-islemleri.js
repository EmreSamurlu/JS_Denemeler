// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "emresamurlu@outlook.com"
let firstName = "emre"
let lastName = "SAMURLU"

//string karakter sayısı -> length
console.log(email.length);

// ilk karakteri bulmak ->0
console.log(firstName[0]);
console.log(lastName[0]);

// büyük harf / küçük harf:
firstName = firstName.toUpperCase();
console.log(firstName);

lastName = lastName.toLowerCase();
console.log(lastName);

// string içinden istediğimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(email.search("@")); // 11 inci karakter
console.log(email[10]); // u karakteri
// olmayan değer aratırsam sonuç -1 geliyor.
console.log(email.search("ghdj"));


// belli bir yere kadar al -> slice:
let DOMAIN = email.slice(email.search("@")+1); // Domain bilgisi
console.log(DOMAIN);
console.log(email.slice(1,10));
console.log(email.slice(12)); // DOMAIN Bilgisi

console.log(DOMAIN.slice(0,DOMAIN.indexOf('.') )); // sadece outlook kısmını aldık.

// bilgiyi değiştir -> replace:
email = email.replace('outlook.com', 'kodluyoruz.org');
console.log(email);

// istenilen bilgi varmı -> includes: // true veya false olarak yanıt verir.
console.log(email.includes('@'));
console.log(email.includes('alsd'));


// istediğim bilgiyle başladımı? bitti mi? -> startsWith, endsWith: // true veya false 
console.log(email.endsWith('kodluyoruz.org'));


// ilk harfleri büyük yapma:
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName);

// concat kullanımı
let firstLastName = firstName.concat(' ', lastName);
console.log(firstLastName);

// charAt kullanımı - charCodeAt kullanımı
console.log(firstLastName.charAt(3)); // belirtilen index numarasında yer alan karakter
console.log(firstLastName.charCodeAt(3)); // belirtilen index numarasında yer alan karakterin Unicode değeri

// split - metni diziye çevirme
let isim = 'Emre,Özge';
let isimler = isim.split(',');
console.log(isimler);


// Sorular
let url = "www.kodluyoruz.org";
let language = "Java";
console.log(url,',', language);

language = language.replace('Java', 'JavaScript');
url = url.slice(url.indexOf('.') + 1);
console.log(url,',', language);