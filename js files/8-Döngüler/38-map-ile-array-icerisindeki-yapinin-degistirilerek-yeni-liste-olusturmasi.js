//* Map metodu kullanımı
/* 
const sayilar = [2, 3, 4, 5, 10]
const newArray = sayilar.map(deger => {
    return deger * 2;
});

console.log("Orijinal dizi:",sayilar);
console.log("Yeni dizi:", newArray); 
*/

const maaslar = [1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const yeniMaaslar = maaslar.map((e) => {
    if (e > 3000){
        return (e * 1.15).toFixed(0);
    }else{
        return (e * 1.25).toFixed(0);
    };
});

console.log(yeniMaaslar);

//* Video Örnek

const USERS = ["AYŞE", "MehMet", "TuğÇE", "AkSEL"]

const NEW_USERS = USERS.map(user => user.toLowerCase());
console.log(NEW_USERS);
/* 
const USERS_OBJ = USERS.map(item =>
    {
        return{
            userName: item, shortName: `${item[0].toUpperCase()}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
        }
    })
    
    console.log(USERS_OBJ)
    */

   //* Kısa Yazım

const USERS_OBJ = USERS.map(item => (
    {userName: item, shortName: `${item[0].toUpperCase()}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
    )
)

console.log(USERS_OBJ)