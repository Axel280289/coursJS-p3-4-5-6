const header = document.getElementById("header");
const content = document.getElementById("content");

function getJoke() {
  //création d'une fonction getJoke
  fetch("https://api.blablagues.net/?rub=blagues") // Fetch pour aller chercher l'api via le lien
    //res  = resultat ou response //.json est une méthode de JS
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data);
      const data = res.data.content; // destructuring

      header.textContent = data.text_head; // permet d'aller chercher le resultat dans data.content.text_head
      content.textContent = data.text !== "" ? data.text : data.text_hidden;
      //permet d'aller chercher le resultat dans data.content.text ou dans text_hidden
      // la ternaire demande si data.text na pas juste un double "" si respecter affiche text sinon text hidden
    });
}

getJoke(); // appel la function getJoke pour la jouer

document.body.addEventListener("click", getJoke); // permet d'ajouter l'evenement ( quand on clique sur le body une nouvelle blague arrive)
