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

const token = window.sessionStorage.getItem("User");
//const tokenObj = JSON.parse(token);
//console.log(tokenObj);

let addPicturesForm = document.querySelector(".modal-content2");
addPicturesForm.onsubmit = async (e) => {
  e.preventDefault();
  // console.log("form submit");

  let response = await fetch(`http://localhost:5678/api/works`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: new FormData(addPicturesForm),
  });
  let result = await response.json();

  alert(result.message);
};

/*let formData = new FormData([form]);
let titre = formData.get("#title");
let categ = formData.get("#selectionCategorie2");

console.log("Pictures", { titre, categ });*/
