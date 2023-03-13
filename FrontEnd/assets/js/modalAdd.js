//-----------------------------------------------------------------------------------
// Ajout Pictures
/*let addPicturesForm = document.querySelector(".modal-content2");
addPicturesForm.addEventListener("submit", addPicture);

function addPicture(e) {
  e.preventDefault();
  //console.log("form submit"); ( NE FONCITONNE PAS)

  let formData = new FormData(addPicturesForm);
  titre = formData.get("#title");
  console.log(titre);
  let categ = formData.get("#selectionCategorie2");

  console.log("Pictures", { titre, categ });
}*/

//-----------------------------------------------------------------------------------------

import { displayWorksD } from "./modalMEP.js";
import { displayWorks } from "./index.js";

export function displayForm(works) {
  var icone = document.querySelector("#fondImage");
  var boutonAdd = document.querySelector("#image");

  const token = window.sessionStorage.getItem("User");
  const tokenObj = JSON.parse(token).token;

  //console.log(tokenObj);

  /*boutonAdd.addEventListener("click", function (e) {
  icone.classList.replace("fa-image", "image");
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

  /*let formData = new FormData([form]);
let titre = formData.get("#title");
let categ = formData.get("#selectionCategorie2");

console.log("Pictures", { titre, categ });*/
  //------------------------------------------------------------
  //AFFICHAGE IMAGE
  var input = document.querySelector("#image");
  var preview = document.querySelector(".preview");

  input.addEventListener("change", updateImageDisplay);
  function updateImageDisplay() {
    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
  }
}
