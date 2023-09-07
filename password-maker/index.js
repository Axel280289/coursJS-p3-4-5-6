const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase(); // permet de passer les minuscule en majuscule, cela evite de tout retaper pour la deuxieme const
const dataNumbers = "0123456789";
const dataSymbols = ",;:!^`\"é'";
const rangeValue = document.getElementById("password-length");
let password = "";
const passwordOutput = document.getElementById("password-output");

// console.log(rangeValue.value);

function generatePassword() {
  let data = [];
  if (lowercase.checked) data.push(...dataLowercase); // Push " permet d'ajouter les data selectionnées dans le tableau"
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);
  // ... spread operateur pour que les 4 tableau n'en fasse plus que 1
  if (data.length === 0) {
    alert("veuillez selectionner des criteres");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    //ajoute + 1 caractere jusque la longeur selectionné
    password += data[Math.floor(Math.random() * data.length)];
    // math.floor permet d'arrondir a l'inferieur
  }

  passwordOutput.value = password;

  passwordOutput.select(); // selection le texte (password)
  navigator.clipboard.writeText(passwordOutput.value); // permet de copier le code crée
  //   document.execCommand("copy"); deprecié

  generateButton.textContent = "copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);
