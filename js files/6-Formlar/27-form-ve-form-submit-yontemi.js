//* form submit:
/* 
let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault() // default islemi engelledik... sayfa yenilenmiyor 
    console.log("islem gerçekleşti.")
} 
*/

let username;
let password;

function handleSubmit(e) {
    e.preventDefault();
    console.log("username:" + username + "-" + "password:" + password);
}

function handleChange(e) {
    if (e.target.name === "username") {
        username = e.target.value;
    }
    if (e.target.name === "password") {
        password = e.target.value;
    }
}