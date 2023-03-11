// Ajout Pictures

const addPicturesForm = document.querySelector(".modal-content2");
addPicturesForm.addEventListener("submit", addPicture);

function addPicture(e) {
  e.preventDefault();
  //console.log("form submit"); ( NE FONCITONNE PAS)

  const form = new FormData(addPicturesForm);
  const titre = formData.get("#title");
  const categ = formData.get("#selectionCategorie2");
}
