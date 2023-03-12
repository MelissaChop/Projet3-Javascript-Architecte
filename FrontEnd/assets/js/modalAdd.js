// Ajout Pictures
/*let addPicturesForm = document.querySelector(".modal-content2");
addPicturesForm.addEventListener("submit", addPicture);

function addPicture(e) {
  e.preventDefault();
  //console.log("form submit"); ( NE FONCITONNE PAS)

  let formData = new FormData(addPicturesForm);
  let titre = formData.get("#title");
  let categ = formData.get("#selectionCategorie2");

  console.log("Pictures", { titre, categ });
}*/
import { displayWorksD } from "./modalMEP.js";
import { displayWorks } from "./index.js";

const token = window.sessionStorage.getItem("User");
const tokenObj = JSON.parse(token).token;
//console.log(tokenObj);

let addPicturesForm = document.querySelector(".modal-content2");
addPicturesForm.onsubmit = async (e) => {
  e.preventDefault();
  console.log("form submit");

  fetch(`http://localhost:5678/api/works/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokenObj}`,
    },
    body: new FormData(addPicturesForm),
  });

  document.querySelector(".galleryModal").innerHTML = "";
  displayWorksD(addPicturesForm);

  document.querySelector(".gallery").innerHTML = "";
  displayWorks(addPicturesForm);
};

/*let formData = new FormData([form]);
let titre = formData.get("#title");
let categ = formData.get("#selectionCategorie2");

console.log("Pictures", { titre, categ });*/
