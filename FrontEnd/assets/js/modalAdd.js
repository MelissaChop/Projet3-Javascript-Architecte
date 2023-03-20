import { displayWorksD } from "./modalMEP.js";
import { displayWorks } from "./index.js";

let imgOk = false;
let titleOk = false;
let categoryOk = false;

//FILTRE EN DYNAMIQUE-----------------------------------------------------
const categorieModal = document.querySelector("#selectionCategorie2");

const filtreModal = document.createElement("option");
filtreModal.id = "0";
const filtreModal1 = document.createElement("option");
filtreModal1.id = "1";
filtreModal1.innerText = "Objets";
const filtreModal2 = document.createElement("option");
filtreModal2.id = "2";
filtreModal2.innerText = "Appartements";
const filtreModal3 = document.createElement("option");
filtreModal3.id = "3";
filtreModal3.innerText = "Hôtels & restaurants";

categorieModal.appendChild(filtreModal);
categorieModal.appendChild(filtreModal1);
categorieModal.appendChild(filtreModal2);
categorieModal.appendChild(filtreModal3);

//console.log(categorieModal);

//------------------------------------------------------------
//AFFICHAGE IMAGE

const [image, preview, previewOff, icone] = [
  document.querySelector("#image"),
  document.querySelector(".preview"),
  document.querySelector(".previewOff"),
  document.querySelector("#fondImage"),
];

const maxSize = 4 * 1024 * 1024; // Taille maximale autorisée en octets

function imageMinia() {
  for (let i = 0; i < this.files.length; i++) {
    //preview.innerHTML = "";
    const file = this.files[i];
    const imageType = /(jpeg|png)$/; // Contrôle si est bien une image

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
      const img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      preview.appendChild(img);

      const reader = new FileReader();
      previewOff.style.display = "none";

      reader.onload = ((aImg) => {
        return (e) => {
          aImg.src = e.target.result;
        };
      })(img);
      reader.readAsDataURL(file);
    }
  }
}
image.addEventListener("change", imageMinia);

//Envoie image a l'API

export function displayForm(works) {
  const token = window.sessionStorage.getItem("User");
  const tokenObj = JSON.parse(token).token;

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
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//-------------TEST Validation du formulaire

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
  if (titleInput.value) {
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

// Fermeture de modal 2

function removeEventListener() {
  categoryInput.removeEventListener("change", categoryInputChange);
  titleInput.removeEventListener("change", titleInputChange);
  imgInput.removeEventListener("change", imgInputChange);
}

const retour = document.querySelector("#return");
retour.addEventListener("click", removeEventListener);

const closeB = document.querySelector(".close-button2");
closeB.addEventListener("click", removeEventListener);

const valid = document.querySelector("#addPictures");
valid.addEventListener("click", removeEventListener);
