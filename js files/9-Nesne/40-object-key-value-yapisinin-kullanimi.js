//* Object Key - Value Yapısının Kullanımı


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

console.log(animal.tiger.canSwim)