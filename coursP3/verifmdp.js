!value2.match(
  /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
);

// Voici la regex pour la vérification de la chaine de caractères du MDP :
// Il faut qu'il y est de la miniscule, de la majuscule, des caractères spéciaux, des chiffres et qui fasse au moins 8 caractères
