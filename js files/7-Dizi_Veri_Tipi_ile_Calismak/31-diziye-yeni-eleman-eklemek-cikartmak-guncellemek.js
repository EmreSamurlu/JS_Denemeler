// array yapısına öğe eklemek ve array içerisinden istenilen öğenin çıkarılması

let items = [10, 20, 30, 40, ]
console.log("items - ilk hali: ", items)

// array: sona eleman eklemek -> push

items.push(50)
console.log ("push 50: ", items)
// array: basa eleman eklemek -> unshift

items.unshift(5)
console.log("unshift 5:" , items)
// array: sondaki elemanı çıkarmak -> pop

// items.pop()

let lastItem = items.pop() // son elemanı lastItem içerisine kaydettik.

console.log("pop edilen item: ", lastItem)
console.log("pop :" ,items)

// array: bastaki elemanı çıkarmak -> shift

let firstItem = items.shift() 

console.log("shift edilen item: ", firstItem)
console.log("shift :" ,items)

// array içindeki bir bilginin değiştirilmesi

// ilk elemanın değiştirilmesi

console.log("ilk hali: ", items)

items[0] = 5;
console.log("ilk bilgi değiştirildi.",items)

// sonuncu elemanın değiştirilmesi

items[items.length - 1] = 1000;
console.log("Son bilgi değiştirildi: ", items)