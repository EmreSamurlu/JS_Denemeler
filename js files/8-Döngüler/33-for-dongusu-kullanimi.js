//* For Loops

//* Video Anlatım
// for ([baslangicAtaması]; [kosulIfadesi]; [arttırımIfadesi]){
    //Yapilacak islem
//}

let users = ["Lorem", "Ipsum", "Dolor"]
/* 
for (let index = 0; index < 10; index++){
    console.log(index)
} 

*/

/* 
let index = 0 
for (; index < 10; index++){
    console.log(index)
}

 */
const userListDOM = document.querySelector('#userList')
for (index = 0; index < users.length; index++){
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index];
    userListDOM.appendChild(liDOM);
}


//* Yazılı kaynak 
/* 
for (let i = 1; i < 5; i++){
    console.log(i);
};    

// bu kod satırında console a, i 5 ten küçük olduğu sürece sonucu yazmasını söyledik, i yi 1 den başlatarak 1 artırdık. Sonuç 5 olduğunda döngü çalışmayı durdurdu.

// Örnekler ve Ödevler:

console.log("Örnek 1 : 10 dan 0 a kadar olan tüm sayılar (10 ve 0 dahil)")

for (let p = 10; p >= 0; p--) {
    console.log(p);
};    


console.log("Ödev 1 : 20 ile 40 arasındaki tüm sayılar") 

for (let t = 21; t < 40; t++){
    console.log(t)
};    

console.log("Örnek 2 : 0 - 50 arasındaki çift sayılar") 

for (let k = 0 ; k < 50 ; k++){
    if (k % 2 == 0){
        console.log(k);
    };    
};    


console.log("Ödev 2 : 0 - 50 arasındaki tek sayılar") 

for (let x = 0 ; x < 50 ; x++){
    if (x % 2 == 1){
        console.log(x);
    };    
};    

 */