// Rappel des types de données
let string = "chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined

// console.log(typeof maVariable);
// //  sert a savoir le type de données

// tableaux

let array = ["Bordeaux", "Toulouse", "Nante"];

// console.log(array[0]); ppour aller chercher bordeaux dans le tableau
// console.log(array[0][3]); pour aller chercher le D de bordeaux

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];

// console.log(array2[3][1]);
// console.log(array2[4].nom); // pour aller chercher le Nom denis dans l'objet

// objet

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// console.log(objet.technos[0]);
// console.log(objet.technos[0][1]);

// objet.adresse = "22 rue du code";

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Jean",
    age: 42,
    technos: ["PHP", "React", "NodeJs"],
    admin: true,
  },
];

// console.log(data[2].pseudo[0]);

// -----------------------------------
// les structures de controle
// -----------------------------------

if (data[0].age > data[1].age) {
  //   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // Valeur si faux
}

// while

let w = 0;

while (w < 10) {
  w++;
  //   console.log("la valeur de w est de  : " + w);
}

// Do while

let d = 0;

do {
  d++;
  //   console.log(d);
} while (d < 5);

// Les boucle for
for (const user of data) {
  //   document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}
// on déclare la valeur de i / jusqu'ou on boucle / on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  //   console.log(data[i].technos[0]);
  //   document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

// switch

document.body.addEventListener("click", (e) => {
  console.log(e.target.id);

  switch (e.target.id) {
    case "JS":
      document.body.style.background = "yellow";
      break;
    case "PHP":
      document.body.style.background = "violet";
      break;
    case "Python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

// Méthode String

let string2 = " Javascript est un langage orienté objet";
console.log(eval(parseInt("1") + 2)); // pour changer une chaine de caractere en number
console.log(typeof "42"); // pour connaitre le type
console.log(isNaN(string2)); //savoir si c'est un chiffre ou pas
console.log(string2.length); // longeur de la chaine de caractere
console.log(string2[string2.length - 1]); // pour afficher le dernier caractere
console.log(string2.indexOf("langage")); // permet de savoir ou commence le mot ou la lettre demandé dans l'exemple (19)
console.log(string2.indexOf("x")); // retourne -1 si il ne connait pas
let newString = string2.slice(20); // coupe le nombre de caractere demandé, ou une  decoupe precise
console.log(newString);
let newString2 = string2.slice(5, 17); // ou une decoupe plus precise du 5iem caractere au 17iem dans cet exemple
console.log(newString2);
console.log(string2.split(" ")); //partout ou tu vois un espace tu coupe et met dans un tableau
console.log(string2.toLowerCase()); // mettre toute la chaine de caractere en minuscule
console.log(string2.toUpperCase()); // mettre toute la chaine de caractere en Majuscule
console.log(string2.replace("Javascript", "PHP")); // remplace tout les mot JavaScript trouvés par PHP

//Méthodes Number

let number2 = 42.1234;
let numberString = "42.12 est un chiffre ";
console.log(number2.toFixed(2)); // permet de garder 2 chiffre aprés la virgule ou 1 si on selectionne 1
console.log(parseInt("43"));
console.log(parseInt(numberString)); // parseInt garde le premier chiffre trouver dans une chaine de caractere
console.log(parseFloat(numberString)); // parseInt garde le premier chiffre et ses décimale trouver dans une chaine de caractere

//Math objet JS

console.log(Math.PI);
console.log(Math.round(4.5)); // pour arrondir
console.log(Math.floor(4.9)); // pour arrondir au plus bas
console.log(Math.ceil(4.9)); // pour arrondir au plus haut
console.log(Math.pow(2, 7)); // 2 puissance 7
console.log(Math.sqrt(16)); // racine carré
console.log(Math.random() * 50); // pour avoir un nombre entre 0 et 50 avec des décimal
console.log(Math.floor(Math.random() * 50)); // pour avoir un nombre entre 0 et 49 entier

// Méthodes Arrays

let array3 = ["Javascript", "PHP", "Python"];
let array4 = ["Ruby", "Solidity"];
let array5 = ["Javascript", "PHP", "Python"];

let newArray = array3.concat(array4); //permet de fusionner les 2 tableaux dans un seul nouveau
console.log(newArray);

let newArray2 = [...array3, ...array4]; //permet de fusionner les 2 tableaux dans un seul nouveau
console.log(newArray2);

console.log(array3.join("-")); // Casse le tableau en mettant un - entre chaques mots ( crée une chaine de caractere)

console.log(array3.slice(1)); // decoupe le premier element du tableau, ca enleve donc JS
console.log(newArray2.slice(2, 5)); // découpe le 2 et garde le 3 - 4 - 5
console.log(array3.indexOf("Python")); // pour savoir a quel index trouver Python

array3.forEach((languages) => console.log(languages));

console.log(array3.every((language) => language === "PHP")); // test si dans chaque element du tableau le mot php existe
console.log(array3.some((language) => language === "PHP")); // test si au moin 1 mot PHP existe dans le tableau

let shift = array3.shift(); // permet de casser le tableau en enlevant le premiere index
console.log(shift);
console.log(array3); // laisse donc plus que 2 elements
console.log(array3.pop()); // retire le dernier element du tableau
console.log(array3); // il ne reste plus que PHP

const restArray = array5.splice(1, 1, "C++"); // enleve le deuxieme element du tableau et le remplace par C++
console.log(array5);

// IMPORTANT DANS MANIPULATION DE ARRAY

let arrayNumber = [4, 74, 28, 12, 1];
console.log(arrayNumber.reduce((x, y) => x + y)); // permet d'additionner tout les elements du tableau

arrayNumber.push(17); // ajoute 17 au tableau
console.log(arrayNumber);

// FILTER, SORT, MAP

// Filter

console.log(arrayNumber.filter((number) => number > 10)); // permet de chercher que les chiffres superieur a 10

// SORT

console.log(arrayNumber.sort()); //range par ordre croissant le tableau ou alphabetique
console.log(arrayNumber.sort((a, b) => b - a)); // Classe du plus grand au plus petit
console.log(arrayNumber.sort((a, b) => a - b)); // Classe du plus petit au plus grand

console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => a - b)); // cherche les chiffres supreieur a 10 et les classe du plus petit au plus grand

//MAP

// document.body.innerHTML = arrayNumber // permet d'appeler un tableau sous forme de LI sur le body
//   .map((number) => ` <li> ${number}</li>`)
//   .join("");

// Méthodes objects

document.body.innerHTML = data
  .filter((user) => user.admin === false) // demande d'afficher que les personnes non admin
  .filter((user) => user.pseudo.includes("Den")) // filtre uniquement le texte commencant par Den
  .sort((a, b) => b.age - a.age) // permet de trier par age
  .map(
    //affiche ce que l'on demande
    (user) =>
      `
<div class="user-card"> 
 <h2>${user.pseudo}</h2>
 <p>Age : ${user.age}</p>
 <p>Status : ${user.admin ? "Modérateur" : "Membre"} <p>  
</div>

`
    //fonction ternaire  <p>Status : ${user.admin ? "Modérateur" : "Membre"} <p> test si les personnes sont admin, si oui mettre modérateur si non mettre membre
  )
  .join(""); //permet d'enlever les , mis par default par le MAP

//----------------
//Dates
//----------------

// dates classiques
let date = new Date();
console.log(date);

// Timestamp
let timstamps = Date.parse(date);
console.log(timstamps);

//IsoString
let iso = date.toISOString();
console.log(date.toISOString()); // date années mois jours heures

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
}

console.log(dateParser(date));

//-------------
// Destructuring
//-------------

let moreData = {
  destVar: ["Element 1", "Element 2"],
};

const { desVar } = moreData;

let array8 = [70, 80, 90];
let [x, y, z] = array8;
//console.log(x, y, z);

const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0]; // permet de garder uniquement les caracteres avant le T
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};

console.log(dateDestructuring(iso));

//---------------
// Les Datasets
//---------------

const h3js = document.getElementById("JS");
console.log(h3js);

// Les Regex

let mail = "from-strach33@gmail.com";
console.log(mail.search(/fromfgg/)); // permet de savoir si from existe  "0" il existe "-1" il existe pas

console.log(mail.replace(/from/, "de")); //permet d'aller chercher from et le remplacer par "de"

console.log(mail.match(/Strach/i)); // le i permet d'enlever lma case sensitive
console.log(mail.match(/[zug]/)); // demande si une des lettre figure dans le mail
console.log(mail.match(/[123]/)); // demande si un des chiffres figure dans le mail
console.log(mail.match(/\d/)); // demande une recherche sur tous les chiffres
console.log(mail.match(/[a-z]/)); // demande une recherche sur tous les lettres

// controller un Mail

console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/));
// permet de controller un mail chiffres et lettre @ et point ainsi que le nom de domaine avec 4 caractere maximun
// \w recherche tous les caracteres chiffres et lettre
// $ permet de signaler la fin de la regex
//^ debut de la regex

let separator = 28021989021989;
console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
// permet de mettre un espace tout les 3 chiffres ou n'importe quelle elements selectionner
//toString passe les chiffres en chaine de caractere
