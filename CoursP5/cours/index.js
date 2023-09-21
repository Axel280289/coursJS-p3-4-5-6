const obj = {
  // index : value
  pseudo: "Pilliums",
  ville: "Cambrai",
  admin: false,

  direBonjour: function () {
    console.log("bonjour je suis " + this.pseudo); // dans l'objet on utulise this pour se deplacer plus vite
  },
};
//   direBonjour() {
//     console.log("Bonjour je suis " + this.pseudo);
//   },
// };

// Ajouter
obj.age = 24;
obj["admin"] = true;

//supprimer
delete obj.ville;

//Modifier
obj.pseudo = "Droklue";

//checker si propriété existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//Parcourir l'objet
for (const key in obj) {
  //   console.log(key + " : " + obj[key]);
}

console.log(obj.direBonjour());

// Obtenir les clés d'un objet
const keys = Object.keys(obj);
console.log(keys);

// Obtenir les valeurs
const values = Object.values(obj);
console.log(values);

const nestedArray = Object.entries(obj); // décompose chaque index et son value dans un tableau
console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "75kg",
};

// fusionner objet
const fusion = Object.assign({}, obj, obj2); // fusionne 2 tableau ( attention si 2 keys identique la derniere ecrase la premiere)
console.log(fusion);

// Empecher les modifications

// const newObj = Object.freeze(obj); //Empeche les modification de l'objet
// newObj.pseudo = "test";
// console.log(newObj);

const newObj = Object.seal(obj); // seal permet de modifier les keys deja existantes mais pas d'en rajouter
newObj.pseudo = "coucou";
newObj.adresse = "42 avenue du code";
console.log(newObj);

// construire des obj
//------------

// fonction constructeur

function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville); // this remplace l'objet ex : user user2 user3
  };
}

const user1 = new User("Pilliums", "cambrai");
const user2 = new User("Axel", "Neuville");
console.log(user1);
console.log(user2.getCity());

//---------------------------
//factory functions
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}
const user4 = User3("Floflo", "Nice");
console.log(user4);

//-------------------------
//Class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayMyName() {
    console.log("bonjour je suis " + this.pseudo);
  }
}

const user5 = new Utilisateur("Samia", "Lyon");
Utilisateur.prototype.sayCity = function () {
  console.log(" j'habite à " + this.ville);
};
console.log(user5);
console.log(user5.sayCity());

let array = [1, 2, 3];

//---------------
//L'héritage

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + " dit : " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("le chien court !");
  }
}

class Cat extends Animal {
  hunt() {
    console.log("j'ai tué un oiseau");
  }
}

const rintintin = new Dog("Rintintin", 9);
console.log(rintintin);
