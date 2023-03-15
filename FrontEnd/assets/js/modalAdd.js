import { displayWorksD } from "./modalMEP.js";
import { displayWorks } from "./index.js";

export function displayForm(works) {
  //var icone = document.querySelector("#fondImage");
  // var boutonAdd = document.querySelector("#image");

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
}
