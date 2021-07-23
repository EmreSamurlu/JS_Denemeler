// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_Literals

let username = "Emre";
let userLastName = "Samurlu"
const DOMAIN = "kodluyoruz.org";

let email = username.toLowerCase() + userLastName.toLowerCase() + "@" + DOMAIN;
console.log("Merhaba", username, userLastName , "sitemize hoşgeldin", "mail adresin", email);

let info = `

Merhaba ${username}, sitemize hoşgeldin.. Mail Adresin ${email}

Baş harfler: ${username[0]}.${userLastName[0]}.
`

console.log(info);

// alıştıma

const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610,
}

const bookTable = `
<table border>
<tbody>
<tr>
<td>Kitap</>
<td>${kitap.ad}</>
</>
<tr>
<td>Yazar</>
<td>${kitap.yazar}</>
</>
<tr>
<td>Tarih</>
<td>${kitap.tarih}</>
</>
</tbody>
</table>
`;

//document.body.innerHTML = bookTable;