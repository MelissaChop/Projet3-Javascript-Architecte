const worksD = await fetch("http://localhost:5678/api/works", {
  method: "GET",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
//console.log(worksD);

/*Mettre au format JSON */
const works = await worksD.json();
//console.log(works);

/* Creer fonction Portfolio*/
async function displayWorksD(works) {
  /*Choix de l'emplacement de la balise HTML*/

  const divGalleryD = document.querySelector(".galleryModal");
  console.log(divGalleryD);

  /*Boucle dans le tableau JSON */
  for (let i = 0; i < works.length; i++) {
    //console.log(works[i].title + ", " + works[i].imageUrl);

    /*Creation des balises HTML*/

    const worksElement = document.createElement("figure");
    worksElement.dataset.id = works[i].id;
    worksElement.dataset.categoryId = works[i].categoryId;
    //console.log(worksElement);*/

    const image = document.createElement("img");
    image.src = works[i].imageUrl;
    image.crossOrigin = "anonymous";
    image.alt = works[i].title;
    console.log(image);

    const titleElement = document.createElement("figcaption");
    titleElement.innerText = "éditer";
    //console.log(titleElement);

    /* Lien entre les blocs enfant et parent*/
    worksElement.appendChild(image);
    //console.log(worksElement);

    worksElement.appendChild(titleElement);

    divGalleryD.appendChild(worksElement);
    //console.log(divGallery);
  }
}
displayWorksD(works);

// Aller à la page suivante
/*function nextPage() {
  // Trouver la page actuelle
  const currentPage = document.querySelector(".modal-page:visible");
  // Trouver la page suivante
  const nextPage = currentPage.nextElementSibling;
  // Cacher la page actuelle et afficher la page suivante
  currentPage.style.display = "none";
  nextPage.style.display = "block";
}*/

// Aller à la page précédente
/*function previousPage() {
  // Trouver la page actuelle
  const currentPage = document.querySelector(".modal-page:visible");
  // Trouver la page précédente
  const previousPage = currentPage.previousElementSibling;
  // Cacher la page actuelle et afficher la page précédente
  currentPage.style.display = "none";
  previousPage.style.display = "block";
}*/

// Écouter les événements de clic sur les boutons
/*document.getElementById("addPictures").addEventListener("click", nextPage);
document
  .getElementById("fa-house-person-return")
  .addEventListener("click", previousPage);*/
