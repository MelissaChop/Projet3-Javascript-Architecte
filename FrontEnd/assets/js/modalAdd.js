import { displayWorksD } from "./modalMEP.js";
import { displayWorks } from "./index.js";

let imgOk = false;
let titleOk = false;
let categoryOk = false;

//FILTRE EN DYNAMIQUE-----------------------------------------------------

function categorieAdd(categories) {
  let selectCategory = document.querySelector("#selectionCategorie2");
  selectCategory.innerHTML = "";

  for (const category of categories) {
    let option = document.createElement("option");
    option.value = category.id;
    if (category.id === 0) {
      option.label = "";
    } else {
      option.label = category.name;
    }
    selectCategory.appendChild(option);
  }
}

//console.log(categorieModal);

//------------------------------------------------------------
//AFFICHAGE IMAGE

let [image, preview, previewOff, icone, img] = [
  document.querySelector("#image"),
  document.querySelector(".preview"),
  document.querySelector(".previewOff"),
  document.querySelector("#fondImage"),
  document.querySelector(".imagePreview"),
];

img.style.display = "none";

const maxSize = 4 * 1024 * 1024; // Taille maximale autorisée en octets

function imageMinia() {
  //preview.innerHTML = "";
  const file = this.files[0];
  const imageType = /(jpg|png)$/; // Contrôle si est bien une image

  if (file.size > maxSize) {
    icone.style.display = "none";
    preview.innerHTML = "<p>Image supérieure à 4 Mo !</p>";
    return false;
  }

  if (!imageType.test(file.type)) {
    icone.style.display = "none";
    preview.innerHTML = "<p>Attention : JPG ou PNG !</p>";
    return false;
  } else {
    img.src = URL.createObjectURL(file);
    img.onload = function () {
      img.style.display = "block";
      preview.appendChild(img);
      previewOff.style.display = "none";
      URL.revokeObjectURL(this.src);
    };
  }
}
image.addEventListener("change", imageMinia);

//Envoie image a l'API

export function displayForm(works, categories) {
  const token = window.sessionStorage.getItem("User");
  const tokenObj = JSON.parse(token).token;
  categorieAdd(categories);

  //console.log(tokenObj);

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
        console.log(work);

        works.push(work);

        displayWorksD(works);
        displayWorks(works);

        previewOff.style.display = "block";
        preview.style.display = "none";
        addPicturesForm.reset();
        imgOk = false;
        titleOk = false;
        categoryOk = false;
        checkValidation();
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//-------------Validation du formulaire

let imgInput = document.querySelector("#image");
let titleInput = document.querySelector("#title");
let categoryInput = document.querySelector("#selectionCategorie2");

let boutonValide = document.querySelector("#addPictures");
boutonValide.disabled = true;

function checkValidation() {
  if (imgOk && titleOk && categoryOk) {
    boutonValide.disabled = false;
  } else {
    boutonValide.disabled = true;
  }
}

function imgInputChange() {
  if (imgInput.value) {
    imgOk = true;
  } else {
    imgOk = false;
  }
  checkValidation();
}

imgInput.addEventListener("change", imgInputChange);

function titleInputChange() {
  if (titleInput.value && titleInput.value.length > 3) {
    titleOk = true;
  } else {
    titleOk = false;
  }
  checkValidation();
}

titleInput.addEventListener("change", titleInputChange);

function categoryInputChange() {
  if (categoryInput.value) {
    categoryOk = true;
  } else {
    categoryOk = false;
  }
  checkValidation();
}

categoryInput.addEventListener("change", categoryInputChange);
