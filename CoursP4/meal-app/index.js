const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");
let meals = []; // let meals = []; : Cette ligne crée un tableau vide appelé meals qui sera utilisé pour stocker les résultats de la recherche.

async function fetchMeals(search) {
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((data) => (meals = data.meals));

  console.log(meals);
}
// Fonction fetchMeals(search) :
// Cette fonction est asynchrone (async) et utilise l'API Fetch pour interagir avec l'API "The Meal DB". Elle prend un argument search qui représente le terme de recherche
// saisi par l'utilisateur.
// Elle effectue une requête HTTP GET vers l'URL de l'API en utilisant le terme de recherche comme paramètre de recherche.
// Une fois la réponse reçue, elle est transformée en format JSON.
// Les données des repas sont extraites de la réponse JSON et stockées dans le tableau meals.
// Enfin, la fonction affiche les repas dans la console.

function mealsDisplay() {
  if (meals === null) {
    result.innerHTML = "<h2>Aucun résultat</h2>"; // Si le tableau meals est vide (c'est-à-dire qu'aucun résultat n'a été trouvé), elle affiche un message indiquant "Aucun résultat".
  } else {
    meals.length = 12; // Sinon, elle limite le nombre de repas à 12 (pour limiter l'affichage)

    result.innerHTML = meals
      .map((meal) => {
        let ingredients = []; // permet de stoker les nom des ingredients

        for (let i = 1; i < 21; i++) {
          if (meal[`strIngredient${i}`]) {
            let ingredient = meal[`strIngredient${i}`];
            let measure = meal[`strMeasure${i}`];

            ingredients.push(`<li>${ingredient} - ${measure}</li>`); // injecte les ingredients en li
          }
        }
        // La boucle for commence avec i initialisé à 1 (let i = 1). Elle va itérer tant que i est inférieur à 21 (i < 21), donc elle va parcourir les indices de 1 à 20 inclus
        // À chaque itération de la boucle, elle vérifie si la propriété meal[strIngredient${i}] existe et n'est pas vide en utilisant le test conditionnel if (meal[strIngredient${i}]).
        // Si la propriété meal[strIngredient${i}] existe, alors son contenu est assigné à la variable ingredient. Cette propriété contient le nom d'un ingrédient d'une recette
        // de plat.
        // De même, la propriété meal[strMeasure${i}] est assignée à la variable measure. Cette propriété contient la mesure ou la quantité associée à l'ingrédient.
        // Ensuite, ces deux valeurs, c'est-à-dire le nom de l'ingrédient et la mesure, sont utilisées pour créer une chaîne HTML sous forme de liste (<li>) qui est stockée dans
        // le tableau ingredients en utilisant ingredients.push().

        return `
          <li class="card">
            <h2>${meal.strMeal}</h2>  
            <p>${meal.strArea}</p>
            <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
            <ul>${ingredients.join("")}</ul>
          </li>
          `;
        // Cette partie utilise une "template string" entourée de backticks ( ) pour créer une chaîne de caractères multiligne qui représente le contenu HTML
        // d'un élément de carte (<li class="card">) affichant les détails d'un repas.
        // ${meal.strMeal} : C'est une interpolation de chaîne (string interpolation) qui insère le nom du repas dans la balise <h2>.
        // ${meal.strArea} : C'est une interpolation de chaîne qui insère l'aire géographique du repas dans la balise <p>.
        // <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}"> : Cette ligne crée une balise <img> pour afficher une image du repas.
        // L'attribut src contient l'URL de l'image (meal.strMealThumb), et l'attribut alt est défini pour inclure le nom du repas dans le texte alternatif de l'image.
        // <ul>${ingredients.join("")}</ul> : Cette ligne crée une liste non ordonnée (<ul>) pour afficher la liste des ingrédients du repas. Les ingrédients sont contenus
        //   dans le tableau ingredients. La méthode join("") est utilisée pour fusionner tous les éléments du tableau en une seule chaîne de caractères, sans séparateur.
        //   Cette chaîne est ensuite insérée dans la balise <ul>.
      })
      .join(""); // pour enlevé la (,) et mettre du vide
  }
}

input.addEventListener("input", (e) => {
  fetchMeals(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mealsDisplay();
});

// input.addEventListener("input", (e) => {...}); : Cet écouteur d'événements est déclenché chaque fois que l'utilisateur saisit quelque chose dans la zone de saisie input.
// Il appelle la fonction fetchMeals() avec la valeur saisie par l'utilisateur.
// form.addEventListener("submit", (e) => {...}); : Cet écouteur d'événements est déclenché lorsque l'utilisateur soumet le formulaire.
// Il empêche la soumission par défaut du formulaire en utilisant e.preventDefault() et appelle la fonction mealsDisplay() pour afficher les résultats.
