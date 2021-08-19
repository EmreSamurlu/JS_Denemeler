//* Fetch API

// JSON dosyadan veri çekmek:
/* 
fetch('11-Fetch_API/settings.json').then(
    response => response.json()

).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})
 */
let userListDOM = document.querySelector('#userList')

// API üzerinden veri çekmek:
/* 
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = item.title;
        userListDOM.appendChild(liDOM);
    });
})
 */

//* Yazılı kaynak örnekleri
/* 
//* GET İsteği Yapma
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(Response => Response.json())
    .then(function(todos) {
        todos.forEach(todo => {
            let liDOM = document.createElement('li')
            liDOM.innerHTML = todo.title;
            userListDOM.appendChild(liDOM);
            console.log(todo.title); // hem console a hemde html içinde yazdırdık.
        });
    })
 */
//* POST İsteği Yapma
/* 
let payload = {
    title: "Blog Title",
    body: "lorem ipsum",
    userID: 1
}

fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(Response => Response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
     */


//* UYGULAMA 1
fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

//* UYGULAMA 2

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(Response => Response.json())
    .then(json => json.forEach(item => {
        console.log(item.email)
    }))
    .catch(err => console.log(err))