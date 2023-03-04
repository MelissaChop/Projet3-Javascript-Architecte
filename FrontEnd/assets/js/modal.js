let modal = document.querySelector(".modal");
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
});
