const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipisicing', 'elit'
];

let counter = 0;

for (; counter < 10; counter++){
    console.log(counter);
    if(counter === 5) {break}
};

// for ( index = 0; index < LOREM_LIST.length; index++){
//     if (LOREM_LIST[index] == 'dolor'){break} // bu ifadeyi gördüğü yerde durur.
//     console.log(LOREM_LIST[index])
//     let LI_DOM = document.createElement('li');
//     LI_DOM.innerHTML = LOREM_LIST[index];
//     UL_DOM.append(LI_DOM)
// }
for ( index = 0; index < LOREM_LIST.length; index++){
    if (LOREM_LIST[index] == 'dolor'){continue} // dolor ifadesini atlayarak devam eder.
    console.log(LOREM_LIST[index])
    let LI_DOM = document.createElement('li');
    LI_DOM.innerHTML = LOREM_LIST[index];
    UL_DOM.append(LI_DOM)
}