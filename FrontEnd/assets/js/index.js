import { initModal } from "./modal.js";

let worksApi = await fetch("http://localhost:5678/api/works");

/*Mettre au format JSON */
let works = await worksApi.json();

/* Creer fonction Portfolio*/
/* Appel API Works*/
export async function displayWorks(works) {
  document.querySelector(".gallery").innerHTML = "";
  /*Choix de l'emplacement de la balise HTML*/

  const divGallery = document.querySelector(".gallery");

  /*Boucle dans le tableau JSON */
  for (let i = 0; i < works.length; i++) {
    /*Creation des balises HTML*/

    const worksElement = document.createElement("figure");
    worksElement.dataset.id = works[i].id;
    worksElement.dataset.categoryId = works[i].categoryId;

    const image = document.createElement("img");
    image.src = works[i].imageUrl;
    image.crossOrigin = "anonymous";
    image.alt = works[i].title;

    const titleElement = document.createElement("figcaption");
    titleElement.innerText = works[i].title;

    /* Lien entre les blocs enfant et parent*/
    worksElement.appendChild(image);

    worksElement.appendChild(titleElement);

    divGallery.appendChild(worksElement);
  }
}

/* CREATION BOUTONS*/

const categoriesApi = await fetch(`http://localhost:5678/api/categories`);

/*Mettre au format JSON */
const categories = await categoriesApi.json();

/* Creer fonction Bouton*/
async function displayCategories(categories) {
  /* Creation new categorie */
  const all = {
    id: 0,
    name: "Tous",
  };

  categories.unshift(all); /*Rajouter au debut du tableau */

  /* Creer fonction Bouton*/

  /*Choix de l'emplacement de la balise HTML*/

  const divCategories = document.querySelector(".filter");

  /*Boucle dans le tableau JSON */
  for (let i = 0; i < categories.length; i++) {
    /*Creation des balises HTML*/

    const buttonCategories = document.createElement("button");
    buttonCategories.innerText = categories[i].name;
    buttonCategories.classList.add("choice_pictures");
    buttonCategories.dataset.id = categories[i].id;
    /*Ajout class*/
    if (categories[i].id === 0) {
      buttonCategories.classList.add("active");
    }

    /* Lien entre les blocs enfant et parent*/

    divCategories.appendChild(buttonCategories);

    //_______________________________________________________________________________
    //FILTRE SUR LES BOUTONS //

    buttonCategories.addEventListener("click", function () {
      let worksFiltrees = works;

      if (categories[i].id != 0) {
        worksFiltrees = works.filter(function (work) {
          return work.categoryId === categories[i].id;
        });
      }
      document.querySelector(".gallery").innerHTML = "";
      displayWorks(worksFiltrees);

      document.querySelector(".active").classList.remove("active");
      buttonCategories.classList.add("active");
    });
  }
}

displayCategories(categories);
displayWorks(works);

// Mise en page de la gallery Connecté avec les boutons "modifier " et la barre noir

const connexion = window.sessionStorage.getItem("User");
const button = document.querySelector(".filter");

if (connexion != null) {
  button.style.display = "none";

  const enTeteNav = document.querySelector("#enTete");
  enTeteNav.style.marginTop = "97px";

  //Ajout En tete //
  //Barre noir //
  let enTete = document.getElementById("barre");
  enTete.style.display = "block";
  enTete.style.display = "flex";

  //Ajout "Modifié"
  let modifProfil = document.querySelector("#modifProfil");
  modifProfil.style.display = "block";

  let modifArticle = document.querySelector("#modifArticle");
  modifArticle.style.display = "block";

  let modifProjet = document.querySelector("#modifProjet");
  modifProjet.style.display = "block";

  let titreGallery = document.querySelector("#portfolio h2");
  titreGallery.style.marginBottom = "2em";

  const titre = document.querySelector("#introduction article h2");
  titre.style.marginTop = "5%";

  //Remplacement Login par Logout
  let log = document.querySelector(".log");
  log.innerHTML = "logout";
  log.addEventListener("click", function (event) {
    event.preventDefault();
    window.sessionStorage.removeItem("User");
    window.location.href = "./index.html";
  });
}

initModal(works, categories);
