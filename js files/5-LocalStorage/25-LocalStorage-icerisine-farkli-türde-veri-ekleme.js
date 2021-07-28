//* LocalStorage İşlemleri

let user = {userName: "EmreSamurlu", isActive: true}

localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo = JSON.parse(localStorage.getItem('userInfo'))

console.log(userInfo);

let items = [1, 2, 3, user]

localStorage.setItem('newItem', JSON.stringify(items))

let newItem = JSON.parse(localStorage.getItem('newItem'))

console.log(newItem)