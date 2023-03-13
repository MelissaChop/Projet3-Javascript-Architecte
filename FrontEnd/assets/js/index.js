//import { displayWorksD } from "./modalMEP";
import { initModal } from "./modal.js";

let worksApi = await fetch("http://localhost:5678/api/works");
//console.log(worksApi);

/*Mettre au format JSON */
let works = await worksApi.json();
//console.log(works);

/* Creer fonction Portfolio*/
/* Appel API Works*/
export async function displayWorks(works) {
  document.querySelector(".gallery").innerHTML = "";
  /*Choix de l'emplacement de la balise HTML*/

  const divGallery = document.querySelector(".gallery");
  //console.log(divGallery);

  /*Boucle dans le tableau JSON */
  for (let i = 0; i < works.length; i++) {
    //console.log(works[i].title + ', ' + works[i].imageUrl);

    /*Creation des balises HTML*/

    const worksElement = document.createElement("figure");
    worksElement.dataset.id = works[i].id;
    worksElement.dataset.categoryId = works[i].categoryId;
    //console.log(worksElement);

    const image = document.createElement("img");
    image.src = works[i].imageUrl;
    image.crossOrigin = "anonymous";
    image.alt = works[i].title;
    //console.log(image);

    const titleElement = document.createElement("figcaption");
    titleElement.innerText = works[i].title;
    //console.log(titleElement);

    /* Lien entre les blocs enfant et parent*/
    worksElement.appendChild(image);
    //console.log(worksElement);

    worksElement.appendChild(titleElement);

    divGallery.appendChild(worksElement);
    //console.log(divGallery);
  }
}

/* CREATION BOUTONS*/

/* Creer fonction Bouton*/

const categoriesApi = await fetch(`http://localhost:5678/api/categories`);
//console.log(categoriesApi);

/*Mettre au format JSON */
const categories = await categoriesApi.json();
//console.log(categories);

/* Creation new categorie */
const all = {
  id: 0,
  name: "Tous",
};

categories.unshift(all); /*Rajouter au debut du tableau */

/* Creer fonction Bouton*/

async function displayCategories(categories) {
  /*Choix de l'emplacement de la balise HTML*/

  const divCategories = document.querySelector(".filter");
  //console.log(divCategories);

  /*Boucle dans le tableau JSON */
  for (let i = 0; i < categories.length; i++) {
    //console.log(categories[i].name);

    /*Creation des balises HTML*/

    const buttonCategories = document.createElement("button");
    buttonCategories.innerText = categories[i].name;
    buttonCategories.classList.add("choice_pictures");
    buttonCategories.dataset.id = categories[i].id;
    /*Ajout class*/
    if (categories[i].id === 0) {
      buttonCategories.classList.add("active");
    }

    //console.log(buttonCategories);

    /* Lien entre les blocs enfant et parent*/

    divCategories.appendChild(buttonCategories);
    //console.log(divCategories);

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
//console.log(displayCategories);
displayWorks(works);
//console.log(displayWorks);

const connexion = window.sessionStorage.getItem("User");
const button = document.querySelector(".filter");
const gallery = document.getElementById("gallery");
//console.log(connexion);

let enTete = document.getElementById("#barre");
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
}

initModal(works);
