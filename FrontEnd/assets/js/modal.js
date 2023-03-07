//MODAL 1 //
var modal = document.querySelector(".modal");

//Ouverture modal
var trigger = document.querySelector(".js-modal");

//Fermeture de la modal
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

// Ferme la modal si clique en dehors de la modal
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

window.addEventListener("keydown", function (e) {
  //  console.log(e.key);
  if (e.key === "Escape" || e.key === "Esc") {
    modal.classList.remove("show-modal");
  }
});

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// 2nd MODAL //

var modal2 = document.querySelector(".modal2");
var trigger2 = document.querySelector(".addPictures");
var closeButton2 = document.querySelector(".close-button2");
var retour = document.querySelector("#return");

function toggleModal2() {
  modal2.classList.toggle("show-modal2");
  modal.classList.remove("show-modal");
}

function windowOnClick2(event) {
  if (event.target === modal2) {
    toggleModal2();
  }
}

window.addEventListener("keydown", function (e) {
  //  console.log(e.key);
  if (e.key === "Escape" || e.key === "Esc") {
    modal2.classList.remove("show-modal2");
  }
});

trigger2.addEventListener("click", toggleModal2);
closeButton2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);
retour.addEventListener("click", function () {
  modal2.classList.remove("show-modal2");
  modal.classList.toggle("show-modal");
});
