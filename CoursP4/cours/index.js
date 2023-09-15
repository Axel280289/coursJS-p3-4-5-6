// Définition

// XMLHttpRequest

function reqListener() {
  // console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.json", true);
req.open("get", "data.txt", true);
req.send();

// Fetch

// fetch("url", "options").then(
//   (response) => {
//     // response
//   }).catch((err) => console.log(err))
// );

// fetch("data.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data));

// fetch("data.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//---------------
// Projet Blagues
//---------------

// L'interface Headers vous permet de créer vos propres objets d'en-têtes via le constructeur Headers

const myHeaders = new Headers();

const init = {
  // DELETE supprime les objets, POST incremente des données dans la base, PUT met a jours
  method: "GET", // POST, PUT, DELETE           // methode GET pour obtenir de base nous sommes en GET ( lire les données)
  headers: myHeaders, // myHeaders objet de JS
  mode: "cors", // cors gére les permissions
  cache: "default",
};
fetch("data.json", init).then((res) => res.json());
// .then((data) => console.log(data));

//--------------------------
// npm i -g json-server
// json-server --w db.json
// PS C:\Users\User\Desktop\coursJS-p3-4-5-6\CoursP4> npm init -y (permet d'initialiser node)

let init2 = {
  method: "POST", // GET, PUT, DELETE
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    //transforme l'objet JS en Json
    pseudo: "From Scratch",
    message: "Yo les gens !",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", (e) => {
  // e.preventDefault();
  fetch("http://localhost:3000/posts", init2);
});

//-----------
// Asycnhrone
//-----------

setTimeout(() => {
  // console.log("Test !");
}, 2000);

// Promise
// fetch('monlien').then(() => ...)  ne sera executer que lorsque nous aurons un retours

// async/await
async function fetchData() {
  //
  // await fetch('monlien') attends que le await soit exécuté avant de faire la suite
  // await maFonction();
  // Execute ensuite...
}
const fetchData2 = async () => {
  // pour fonction fléché il faut mettre le async aprés
  // await fetch('monlien')
  // await maFonction();
  // Execute ensuite...
};

//---------
// User Api
//---------

//--------------------------------
// JSON
// JSON = format de données

// méthode .json() Elle retourne une promesse qui s'auto-résout en renvoyant le corps de la requête parsée au format JSON.

fetch("data.json")
  .then((res) => res.json()) // requete de data
  .then((data) => {
    // Stringify => converti en JSON
    let settings = JSON.stringify(data);
    // Parse => transforme json en objet js
    console.log(JSON.parse(settings));
  });

//---------
// Meal Api
//---------

//---------------------------------
// Web API

// Local storage
localStorage.data = "Je stock la data"; //permet de stoker la data dans le local storage
// document.body.textContent = localStorage.data;
// afficher la data dans le body

localStorage.removeItem("data"); // permet de supprimer la data

const obj = {
  name: "Denis",
  age: 22,
};

// il faut passer des chaines de caractères
// Stringify => converti en JSON
localStorage.user = JSON.stringify(obj);

// Parse => transforme json en objet js
console.log(JSON.parse(localStorage.user));

//----------------
// Session storage
// reste juste le temps de la sessions
// sessionStorage.dataSettings = "55px";
// console.log(sessionStorage.dataSettings);

//----------------
// Cookie + notif

document.cookie = "username = BeauvoisAxel";

// Bonne Pratique

document.cookie = "pseudo=FS;path=/; max-age=450000; secure; samesite"; // max-age temps d'expiration du cookies
