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

var icone = document.querySelector("#fondImage");
var boutonAdd = document.querySelector("#image");

const token = window.sessionStorage.getItem("User");
const tokenObj = JSON.parse(token).token;

//console.log(tokenObj);

boutonAdd.addEventListener("click", function (e) {
  icone.classList.replace("fa-image", "image");
});

let addPicturesForm = document.querySelector("#formModal");
addPicturesForm.onsubmit = async (e) => {
  const addImage = new FormData(addPicturesForm);

  e.preventDefault();

  fetch(`http://localhost:5678/api/works`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokenObj}`,
    },
    body: addImage,
  });
  /*.then((reponse) => {
      if (
        addImage.get("#image") === true ||
        addImage.get("#title") === true ||
        addImage.get("#category") === true
      ) {
        const valider = document.querySelector(".addPictures");
        valider.disabled = false;
      }
      return reponse.JSON;
    })
    .catch((error) => {
      console.log(error);
    });*/

  /*document.querySelector(".galleryModal").innerHTML = "";
  displayWorksD(addPicturesForm);

  document.querySelector(".gallery").innerHTML = "";
  displayWorks(addPicturesForm);*/
};

/*let formData = new FormData([form]);
let titre = formData.get("#title");
let categ = formData.get("#selectionCategorie2");

console.log("Pictures", { titre, categ });*/
