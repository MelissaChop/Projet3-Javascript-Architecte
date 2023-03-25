// Import des fonctions Works

import { displayWorksD } from "./modalMEP.js";
import { displayWorks } from "./index.js";

// Declaration des variables pour les différentes parties du formulaire
let imgOk = false;
let titleOk = false;
let categoryOk = false;

let titleInput = document.querySelector("#title");
let categoryInput = document.querySelector("#selectionCategorie2");

let boutonValide = document.querySelector("#addPictures");

let messageError = document.querySelector("#pictures");

//FILTRE EN DYNAMIQUE-----------------------------------------------------
// Permet de creer la partie categories de la Modal2
function categorieAdd(categories) {
  let selectCategory = document.querySelector("#selectionCategorie2");
  selectCategory.innerHTML =
    ""; /* A chaque retour sur la page on efface pour réafficher*/

  for (const category of categories) {
    let option = document.createElement("option");
    option.value = category.id;
    if (category.id === 0) {
      option.label = ""; /* Retire la category "Tous" */
    } else {
      option.label = category.name;
    }
    selectCategory.appendChild(option);
  }
}

//Envoie image a l'API---------------------------------------------

//Appel des categories et works dans le formulaire ( grace aux imports).
export function displayForm(works, categories) {
  const token = window.sessionStorage.getItem("User");
  const tokenObj = JSON.parse(token).token;
  categorieAdd(categories);

  // Gerer la post pour les nouvelles images
  let addPicturesForm = document.querySelector("#formModal");
  addPicturesForm.onsubmit = (e) => {
    const addImage = new FormData(addPicturesForm);
    e.preventDefault();

    fetch(`http://localhost:5678/api/works`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenObj}`,
      },
      body: addImage,
    })
      .then((reponse) => {
        return reponse.json();
      })
      .then((work) => {
        works.push(work);

        displayWorksD(works);
        displayWorks(works);

        /*Gestion affichage*/
        previewOff.style.display = "flex";
        preview.style.display = "none";
        addPicturesForm.reset();

        imgOk = false;
        titleOk = false;
        categoryOk = false;

        checkValidation();
        messageError.innerHTML = ""; // Retait message d'erreur qui demande de correctement remplir le formulaire
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//------------------------------------------------------------
//AFFICHAGE IMAGE
// Récupération des éléments HTML qui vont permettre l'affichage de l'image miniature
let [image, preview, previewOff, icone, img] = [
  document.querySelector("#image"),
  document.querySelector(".preview"),
  document.querySelector(".previewOff"),
  document.querySelector("#fondImage"),
  document.querySelector(".imagePreview"),
];

img.style.display =
  "none"; /* On cache en premier la partie où doit s'afficher l'image */

const maxSize = 4 * 1024 * 1024; // Taille maximale autorisée en octets

//Fonction pour permettre d'afficher l'image
function imageMinia() {
  const file = this.files[0]; // recupere le fichier de l'input de type file
  const imageType = /(jpg|jpeg|png)$/; // Contrôle si est bien une image jpg ou png
  preview.innerHTML = "";
  previewOff.style.display = "block";

  // gestion de la taille maximum
  if (file.size > maxSize) {
    icone.style.display = "none";
    preview.innerHTML = "<p>Image supérieure à 4 Mo !</p>";
    return false;
  }

  // Gestion du type d'image
  if (!imageType.test(file.type)) {
    icone.style.display = "none";
    preview.innerHTML = "<p>Attention : JPG ou PNG !</p>";
    return false;
  } else {
    img.src =
      URL.createObjectURL(
        file
      ); /*Creer une URL de l'image, afin de recuperer sa source */
    img.onload = function () {
      img.style.display = "block";
      preview.appendChild(img);
      previewOff.style.display = "none";
      URL.revokeObjectURL(this.src);
    };
  }
}
image.addEventListener("change", imageMinia);

//-------------Validation du formulaire --------------------

boutonValide.disabled = true;

// Definir si bouton est disponible ou pa, celon si formulaire completement remplis
function checkValidation() {
  if (imgOk && titleOk && categoryOk) {
    boutonValide.disabled = false;
    messageError.innerHTML = "";
  } else {
    boutonValide.disabled = true;
    messageError.innerHTML =
      "<p>Merci de remplir tous les paramètres avant de valider</p>";
    // Message d'erreur tant qu ele formulaire n'est pas correctement remplis
  }
}

// Permet de voir si la partie Image est remplis ou non
function imgInputChange() {
  if (image.value) {
    imgOk = true;
  } else {
    imgOk = false;
  }
  checkValidation();
}

// Ajout evenement lorsqu'on remplis cette partie du Form. et appel de la fonction Remplis ou non
image.addEventListener("change", imgInputChange);

// Permet de voir si la partie Title est remplis ou non

function titleInputChange() {
  if (titleInput.value && titleInput.value.length > 3) {
    titleOk = true;
  } else {
    titleOk = false;
  }
  checkValidation();
}

// Ajout evenement lorsqu'on remplis cette partie du Form. et appel de la fonction Remplis ou non
titleInput.addEventListener("change", titleInputChange);

// Permet de voir si la partie Category est remplis ou non

function categoryInputChange() {
  if (categoryInput.value) {
    categoryOk = true;
  } else {
    categoryOk = false;
  }
  checkValidation();
}

// Ajout evenement lorsqu'on remplis cette partie du Form. et appel de la fonction Remplis ou non
categoryInput.addEventListener("change", categoryInputChange);
