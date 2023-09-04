const target = document.getElementById("target");
let array = ["développeur", "photographe", "creatif"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800); // la durée total d'affichage d'un mot
};

const loop = () => {
  setTimeout(() => {
    // permet de rejouer a partir du premier mot
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
      // ajoute une lettre au mot actuel tant que la longueur
      //de celui ci n'est pas depassé
      createLetter();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      //des que l'on arrive au bout du mot il faut le changer on rentre donc dans le else
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800); //Permet de mettre un delais avant de jouer les autres mots
    }
  }, 60);
};

// fonction recursive

// si les mot arrive a la fin, remet leur index au debut ainsi que l'index de la lettre
// sinon rajoute une lettre a chaque fois que letterIndex est inferieur a la longueur du mot
// sinon Word index+1 pour changer de mot et ne pas oublier de remettre
//LetterIndex a 0 pour commencer au debut du mot a chaque fois
// ne pas oublier d'appeler la fonction a chaque fois
