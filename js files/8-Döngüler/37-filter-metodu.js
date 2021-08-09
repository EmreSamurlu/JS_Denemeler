//* Filter Metodu ile Array İçerisinde Sadece İstenilen Bilgilerin Yeni Listeye Eklenmesi
//* https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


//* Yazılı Kaynak

// 5 Harften Fazla Olanlar
const products = ["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"];

const newProducts = products.filter(eleman => eleman.length > 5);
console.log(newProducts);

const users = [
	{fullName: "Mehmet Veli", isActive: false},
	{fullName: "Ali Duran", isActive: true},
    {fullName: "Ahmet Yılmaz", isActive: true},
    {fullName: "Oğuz Şahin", isActive: false},
]

// const activeUsers = users.filter(user => user.isActive === true);
const activeUsers = users.filter(user => user.isActive); // yine true olup olmadığına bakar (default olarak)
console.log(activeUsers);


//* Sorular

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
},
{
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML", "CSS"],
    }
];

console.log("--- Soru 1 ---");

const olderPerson = person.filter(older => older.age > 30);

console.log(olderPerson);


console.log("--- Soru 2 ---");

const scriptBilen = person.filter(scBilen => scBilen.languages.includes('JavaScript'))

console.log(scriptBilen);