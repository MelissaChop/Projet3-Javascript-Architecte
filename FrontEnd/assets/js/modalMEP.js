const worksD = await fetch("http://localhost:5678/api/works");
//console.log(worksD);

/*Mettre au format JSON */
const worksDelete = await worksD.json();
//console.log(worksDelete);

/* Creer fonction Portfolio*/
async function displayWorksD(worksDelete) {
  /*Choix de l'emplacement de la balise HTML*/

  const divGallery = document.querySelector(".galleryModal");
  //console.log(divGallery);

  /*Boucle dans le tableau JSON */
  for (let i = 0; i < worksDelete.length; i++) {
    // console.log(worksDelete[i].title + ", " + worksDelete[i].imageUrl);

    /*Creation des balises HTML*/

    const worksElement = document.createElement("figure");
    worksElement.dataset.id = worksDelete[i].id;
    worksElement.dataset.categoryId = worksDelete[i].categoryId;
    //console.log(worksElement);

    const image = document.createElement("img");
    image.src = worksDelete[i].imageUrl;
    image.crossOrigin = "anonymous";
    image.alt = worksDelete[i].title;
    //console.log(image);

    const titleElement = document.createElement("figcaption");
    titleElement.innerText = worksDelete[i].title;
    //console.log(titleElement);

    /* Lien entre les blocs enfant et parent*/
    worksElement.appendChild(image);
    //console.log(worksElement);

    worksElement.appendChild(titleElement);

    divGallery.appendChild(worksElement);
    //console.log(divGallery);
  }
}
