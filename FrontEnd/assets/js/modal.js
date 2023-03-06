/*let modal = document.querySelector(".modal");
//modal = null;

const openModal = function (e) {
  e.preventDefault();

  const target = document.querySelector(e.target.getAttribute("href"));
  target.style.display = null;
  target.removeAttribute("arira-hidden");
  target.setAttribute("arira-modal", true);
  modal = target;
  modal.addEventListener("click", closeModal);
  modal.querySelector(".js-close-modal").addEventListener("click", closeModal);

  modal
    .querySelector(".js-modal-stop")
    .addEventListener("click", stopPropagation);
};

const closeModal = function (e) {
  if ((modal = null)) {
    return;
  } else {
    e.preventDefault();
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
    modal.setAttribute("arira-hidden", true);
    modal.removeAttribute("arira-modal");

    modal.removeEventListener("click", closeModal);
    modal
      .querySelector(".js-close-modal")
      .removeEventListener("click", closeModal);

    modal
      .querySelector(".js-modal-stop")
      .removeEventListener("click", stopPropagation);

    //modal.style.display = null;
  }
};

const stopPropagation = function (e) {
  e.stopPropagation();
};

document.querySelectorAll(".js-modal").forEach((a) => {
  a.addEventListener("click", openModal);
});

//modal se ferme quand click sur echap du clavier//
window.addEventListener("keydown", function (e) {
  //  console.log(e.key);
  if (e.key === "Escape" || e.key === "Esc") {
    closeModal(e);
  }
});*/
//-------------------------------------------------------------------------------------

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
