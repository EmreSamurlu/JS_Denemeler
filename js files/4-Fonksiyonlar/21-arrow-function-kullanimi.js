//* Arrow Function Kullanımı
/* 
function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello("JavaScript")

const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`)}
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`) // eğer bir parametre varsa parantez kullanımına gerek yoktur. aynı şekilde bir işlem çıkışı olduğu için süslü parantez de kullanılmaz.
helloFuncV2("helloFuncV2")

const helloFuncV3 = ( firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3("helloFuncV3", "Last Name Info")


const helloFuncV4 = ( firstName, lastName) => 
{let info = `Merhaba ${firstName} ${lastName}`
console.log(info)
return info} // süslü parantez kullanımı gerek. birden fazla işlem yapıldı.
helloFuncV4("helloFuncV4", "Other Info")

 */
//* Dizi listesi oluşturan fat arrow function 
/* 
const seriesList = list => {
    list.forEach((series, index) => {
        console.log(`${index+1}. ${series}`)
    });
};
seriesList(["Firefly", "The Mandalorian", "Breaking Bad", "Sherlock"]);
 */

//* İkinci örnek

const newArray = (nums) => {

    const newNums = nums.map(e=>{
        if(e%2 == 0){
            return e*2
        }else if(e%2 == 1){
            return e*3
        }
    });
    return newNums
}

console.log(newArray([1,2,3,4,5]));
