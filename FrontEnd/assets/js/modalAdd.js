import { displayWorksD } from "./modalMEP.js";
import { displayWorks } from "./index.js";

export function displayForm(works) {
  var icone = document.querySelector("#fondImage");
  var boutonAdd = document.querySelector("#image");

  const token = window.sessionStorage.getItem("User");
  const tokenObj = JSON.parse(token).token;

  //console.log(tokenObj);

  /*boutonAdd.addEventListener("click", function (e) {
  icone.classList.replace("previewOff", "preview");
});*/

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
        /*if (
          addImage.get("#image") === true ||
          addImage.get("#title") === true ||
          addImage.get("#category") === true
        ) {
          const valider = document.querySelector(".addPictures");
          valider.disabled = false;
        }*/

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

  //------------------------------------------------------------
  //AFFICHAGE IMAGE
  var image = document.querySelector("#image");
  var preview = document.querySelector(".preview");
  let previewOff = document.querySelector(".previewOff");

  /* image.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      console.log(this.files[0].size);
    }
  });*/
  //----------------^^----------------
  /*function updateImageDisplay() {
    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
  }*/

  image.addEventListener("change", function () {
    for (var i = 0; i < this.files.length; i++) {
      var file = this.files[i];
      var imageType = /^image\//;

      if (!imageType.test(file.type)) {
        continue;
      }

      const img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      preview.appendChild(img); // En admettant que "preview" est l'élément div qui contiendra le contenu affiché.

      var reader = new FileReader();
      reader.onload = (function (aImg) {
        return function (e) {
          aImg.src = e.target.result;
          previewOff.style.display = "none";
        };
      })(img);
      reader.readAsDataURL(file);
    }
  });
}

//  #addPictures = id du boutons valider modal 2
/*
-Pour accéder à un fichier sélectionné en utilisant un sélecteur DOM classique :

var fichierSelectionne = document.getElementById('#addPictures').files[0];
*/
