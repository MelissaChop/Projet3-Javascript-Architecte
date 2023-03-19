import { displayWorksD } from "./modalMEP.js";
import { displayWorks } from "./index.js";

//FILTRE EN DYNAMIQUE
const categorieModal = document.querySelector("#selectionCategorie2");

const filtreModal = document.createElement("option");
filtreModal.value = "0";
const filtreModal1 = document.createElement("option");
filtreModal1.value = "1";
filtreModal1.innerText = "Objets";
const filtreModal2 = document.createElement("option");
filtreModal2.value = "2";
filtreModal2.innerText = "Appartements";
const filtreModal3 = document.createElement("option");
filtreModal3.value = "3";
filtreModal3.innerText = "Hôtels & restaurants";

categorieModal.appendChild(filtreModal);
categorieModal.appendChild(filtreModal1);
categorieModal.appendChild(filtreModal2);
categorieModal.appendChild(filtreModal3);

console.log(categorieModal);

//---------------------------------------------------------
let bouttonValid = document.querySelector("#addPictures");
let inputImage = document.querySelector("#image");
let inputTitle = document.querySelector("#title");
let inputCategory = document.querySelector("#selectionCategorie2");

//------------------------------------------------------------
//AFFICHAGE IMAGE

var image = document.querySelector("#image");
var preview = document.querySelector(".preview");
let previewOff = document.querySelector(".previewOff");
let icone = document.querySelector("#fondImage");

var maxSize = 4 * 1024 * 1024; // Taille maximale autorisée en octets

image.addEventListener("change", function () {
  for (var i = 0; i < this.files.length; i++) {
    preview.innerHTML = "";
    var file = this.files[i];
    var imageType = /(jpeg|png)$/; // Controle si est bien une image

    if (file.size > maxSize) {
      icone.style.display = "none";
      preview.innerHTML = "<p >Image superieur à 4mo !</p>";
      return false;
    }

    if (!imageType.test(file.type)) {
      icone.style.display = "none";
      preview.innerHTML = "<p >Attention : jpg ou png !</p>";
      return false;
    } else {
      const img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      preview.appendChild(img);

      var reader = new FileReader();
      previewOff.style.display = "none";

      reader.onload = (function (aImg) {
        return function (e) {
          aImg.src = e.target.result;
        };
      })(img);
      reader.readAsDataURL(file);
    }
  }
});

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

//-------------TEST Ne fonctionne pas
/* if (
    inputImage.value === "" ||
    inputTitle.value === "" ||
    inputCategory.value === ""
  ) {
    // bouttonValid.disabled = true;
    return;
  } else {
    bouttonValid.disabled = false;*/
