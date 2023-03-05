const worksD = await fetch("http://localhost:5678/api/works", {
  method: "GET",
  headers: {
    accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});
//console.log(worksD);

/*Mettre au format JSON */
const works = await worksD.json();
//console.log(worksD);

/* Creer fonction Portfolio*/
async function displayWorksD(works) {
  /*Choix de l'emplacement de la balise HTML*/

  const divGallery = document.querySelector("#galleryModal");
  console.log(divGallery);

  /*Boucle dans le tableau JSON */
  for (let i = 0; i < works.length; i++) {
    // console.log(worksDelete[i].title + ", " + worksDelete[i].imageUrl);

    /*Creation des balises HTML*/

    const worksElement = document.createElement("figure");
    worksElement.dataset.id = works[i].id;
    worksElement.dataset.categoryId = works[i].categoryId;
    //console.log(worksElement);

    const image = document.createElement("img");
    image.src = works[i].imageUrl;
    image.crossOrigin = "anonymous";
    image.alt = works[i].title;
    //console.log(image);

    /* const titleElement = document.createElement("figcaption");
    titleElement.innerText = works[i].title;*/
    //console.log(titleElement);

    /* Lien entre les blocs enfant et parent*/
    worksElement.appendChild(image);
    //console.log(worksElement);

    //worksElement.appendChild(titleElement);

    divGallery.appendChild(worksElement);
    //console.log(divGallery);
    // }
  }
}
displayWorksD(works);
