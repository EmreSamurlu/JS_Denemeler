//* Object Destructuring

let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org",

}

// Obje içindeki bilgilerin tek seferde çıkarılması

// let userName = settings.userName
// console.log(userName)

// rename ve Destructuring yapıldı.

let{userName: user, password, isActive, ip: serverIP, serverName} = settings;
console.log(user, password, isActive, serverIP, serverName);
console.log(settings);
console.log(user);

console.log("---")

// obje içindeki bazı bilgilerin çıkarılması
let {userName: userName2, password: password2, isActive: isActive2, ...newSettings} = settings // (...newSettings) kalan bilgileri buraya at
// eğer değişken ismi daha önce tanımlanmadıysa:
// let{userName, password, isActive, ...newSettings} = settings;

console.log(userName2, password2, isActive2, newSettings);

// objenin Destructuring ile kopyalanması
//* HATALI KULLANIM!!
//let settings2 = settings;
// settings2.userName = "Değişen bilgi";
// console.log("Settings:",settings);
// console.log("Settings2:",settings2);

//* DOĞRU KULLANIM :)
let settings2 = {...settings};
settings2.userName = "Değişen bilgi";
console.log("Settings:",settings);
console.log("Settings2:",settings2);

console.log("---")

let score = [100, 200, 300, 400];

let [score1, score2, ...otherScore] = score;
console.log(score1, score2, otherScore)

// object kopyalama ile aynı ... let settings2 = {...settings} ** Parantezlere dikkat !!

console.log("---")
let copyOfScore = [...score];
console.log(copyOfScore);


console.log("---");

const divide = ({num1, num2 = 1}) => { // default değer olarak 1 girdik. 
    return num1 / num2;
}

const nums ={
    num1: 10,
    num2: 2,
};

console.log(divide(nums));