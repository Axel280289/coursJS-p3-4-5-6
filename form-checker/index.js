const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type ="text"], input[type ="password"]'
);
// console.log(inputs); // controller si on a bien nos 4 id selectionnés

const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
  const Container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    // ! veut dire le contraire de valide  ( demande si c'est vrais ou faux)
    Container.classList.add("error"); // joue cela si c'est faux
    span.textContent = message;
  } else {
    Container.classList.remove("error"); // joue cela si c'est vrais
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "le pseudo dois faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "le pseudo ne dois pas contenir de caracteres speciaux "
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

//------------------------------
//facon de faire  en le faisant pour chaque element Pseudo/email/mdp/etc...
//------------------------------
// const pseudoChecker = (value) => {
//   const pseudoContainer = document.querySelector(" .pseudo-container");
//   const errorDisplay = document.querySelector(" .pseudo-container > span"); // permet d'aller chercher la span dans la classe pseudo-container

//   if (value.length > 0 && (value.length < 3 || value.length > 20)) {
//     pseudoContainer.classList.add("error"); // ajoute la classe error si le pseudo fais moins de 3 ou plus de 20 caracteres
//     errorDisplay.textContent = " le pseudo dois faire entre 3 et 20 caracteres";
//   } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
//     // permet de controller qu'il ny ai pas de caracteres speciaux dans le pseudo
//     // ! veut dire l'inverse de
//     // la regex test si ya des lettre en minuscule/majuscule/ _.- si autre chose que cela ( un message d'erreur apparait)
//     pseudoContainer.classList.add("error"); // ajoute la classe error si des caracteres speciaux sont trouvé
//     errorDisplay.textContent =
//       "le pseudo ne dois pas contenir de caracteres speciaux";
//   } else {
//     pseudoContainer.classList.remove("error");
//     errorDisplay.textContent = "";
//   }
// };
//-------------------------

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/)) {
    //regex pour tester le mail
    errorDisplay("email", "le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  progressBar.classList = ""; // permet d'ecraser la classe progressbar pour ne pas que celle ci s'empile
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
    // regex controle de Mdp
  ) {
    errorDisplay(
      "password",
      " Minimun de 8 caracteres, une majuscule, un chiffre et un caractère spécial"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    // si mdp moin de 12 caractereq mot de passe correct
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen"); // si mdp plus de 12 caracteres mot de passe sécurisé
    errorDisplay("password", "", true);
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass); // pour dire de jouer le confirmPassword a chaque changement de lettre dans password
};

const confirmChecker = (value) => {
  if (value !== password) {
    // si la value de confirmer le mot de passe n'est pas egale a mot de passe erreur s'affiche
    errorDisplay("confirm", " les mots de passe ne correspondents pas");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

// stoker les informations
form.addEventListener("submit", (e) => {
  e.preventDefault(); // permet d'annuler l'actualisation de la page

  if (pseudo && email && password && confirmPass) {
    const data = {
      // pour stoker les infos
      pseudo: pseudo,
      email: email,
      password: password,

      //   ou
      //   pseudo, email, password
    };
    inputs.forEach((input) => (input.value = "")); //pour enlever le texte dans pseudo, mdp, email une fois le formulaire envoyer
    progressBar.classList = ""; // pour enlever le texte dans confirmer mot de passe
    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    console.log(data);

    alert("inscription validée");
  } else {
    alert("veuillez remplir correctement les champs");
  }
});
