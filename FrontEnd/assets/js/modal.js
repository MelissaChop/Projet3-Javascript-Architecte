import { displayWorksD } from "./modalMEP.js";
import { displayForm } from "./modalAdd.js";

// initialiser les variables qui vont etre utilise dans les deux modales
let myWorks = null;
let myCategories = null;

export function initModal(works, categories) {
  myWorks = works;
  myCategories = categories;
}

//MODAL 1 //

// Selection de la modal a partir du HTML
const modal = document.querySelector(".modal");

//Ouverture modal
const trigger = document.querySelector(".js-modal");

//Fermeture de la modal
const closeButton = document.querySelector(".close-button");

// fonction qui permet d'afficher ou non la modal, et appel des works
function toggleModal() {
  modal.classList.toggle("show-modal");
  displayWorksD(myWorks);
}

// Ferme la modal si clique en dehors de la modal
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

// Fermeture de la modal si clique sur echap/escape
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    modal.classList.remove("show-modal");
  }
});

// Ajout des evenements au click pour ouvrir, et fermer la modal
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// 2nd MODAL //

// Selection des differents element qui vont etre utiliser pour l'ouverture et la fermeture de la modal
const modal2 = document.querySelector(".modal2");
const trigger2 = document.querySelector(".addPictures");
const closeButton2 = document.querySelector(".close-button2");
const retour = document.querySelector("#return");

// Ouverture ou fermeture de la modal 2 et remove de la modal 1 avec affichage de categories et works
function toggleModal2() {
  modal2.classList.toggle("show-modal2");
  modal.classList.remove("show-modal");
  displayForm(myWorks, myCategories);
}

// Ferme la modal si clique en dehors de la modal
function windowOnClick2(event) {
  if (event.target === modal2) {
    toggleModal2();
  }
}

// Fermeture de la modal si clique sur echap/escape
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    modal2.classList.remove("show-modal2");
    //.addEventListener("click", removeEventListener);
  }
});

// Ajout des evenements au click pour ouvrie, et fermer la modal
trigger2.addEventListener("click", toggleModal2);
closeButton2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);
retour.addEventListener("click", function () {
  modal2.classList.remove("show-modal2");
  modal.classList.toggle("show-modal");
});
