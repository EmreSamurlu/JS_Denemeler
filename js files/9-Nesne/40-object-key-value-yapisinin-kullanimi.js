//* Object Key - Value Yapısının Kullanımı

let laptop1 = {
    brand:"Apple",
    model:"MacBook Pro",
    "2kg": 2,
    "model name": "MacBook Pro",

}

console.log(laptop1)

// Doğru Anahtar Bilgisi Oluşturmak
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model)
console.log(laptop1["2kg"])
console.log(laptop1["model name"])

// Anahtar bilgisine yeni değer eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)

// Yeni Bilgi eklemek
laptop1.versiyon = "10.15.7"
console.log(laptop1)


// Anahtar Bilgilerine Ulaşmak (keys) -> Object.keys(item)

keys = Object.keys(laptop1)
console.log(keys);
console.log(Object.keys(laptop1));

keys.forEach(keyInfo => {
    console.log(keyInfo);
    console.log(laptop1[keyInfo]);
});

// Değer Bilgilerine Ulaşmak (values) -> Object.values(item)

console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value => {
    console.log(value)
})

let settings = {
    password: 1234,
    userName: 'user1'
}




//*
/* 
let animal = {
    eagle:{
        flies: true,
        hasBeak: true,
        hasFourLegs: false,
    },
    tiger:{
        flies: false,
        hasBeak: false,
        hasFourLegs: true,
    }
};

console.log(animal.tiger.flies);
console.log(animal.tiger.hasFourLegs);

//* Square Bracket Kullanımı
animal.tiger["canSwim"] = true; // bu şekilde yeni değer ataması yapılabilir.

console.log(animal.tiger.canSwim) */


//* Kompleks Objeler Kullanımı
let state = {
	users:[
		{name: "Brock", age: 25, favoriteColor: "red"},
		{name: "Jessie", age: 17, favoriteColor: "yellow"},
		{name: "James", age: 41, favoriteColor: "blue"},
		{name: "Winnie", age: 18, favoriteColor: "purple"}
	],
	settings:{
		version: "1.0.5",
        DNS: "105.xx.xx.xx",
        website: "https://www.example.com/"
	},
	banList: ["Ash", "Angelica", "Tom", "Jerry"]
}

console.log(state.users[1].name);
console.log(state.settings.website);