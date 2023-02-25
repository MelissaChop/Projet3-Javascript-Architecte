/* Appel API Works*/

const worksApi = await fetch("http://localhost:5678/api/works");
//console.log(worksApi);

/*Mettre au format JSON */
const works = await worksApi.json();
//console.log(works);

/* Creer fonction Portfolio*/
async function displayWorks(works) {
  /*Choix de l'emplacement de la balise HTML*/

  const divGallery = document.querySelector(".gallery");
  //console.log(divGallery);

  /*Boucle dans le tableau JSON */
  for (let i = 0; i < works.length; i++) {
    //console.log(works[i].title + ', ' + works[i].imageUrl);

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

    const titleElement = document.createElement("figcaption");
    titleElement.innerText = works[i].title;
    //console.log(titleElement);

    /* Lien entre les blocs enfant et parent*/
    worksElement.appendChild(image);
    //console.log(worksElement);

    worksElement.appendChild(titleElement);

    divGallery.appendChild(worksElement);
    //console.log(divGallery);
  }


}


/* CREATION BOUTONS*/

/* Creer fonction Bouton*/

const categoriesApi = await fetch(`http://localhost:5678/api/categories`);
//console.log(categoriesApi);

/*Mettre au format JSON */
const categories = await categoriesApi.json();
//console.log(categories);

/* Creation new categorie */
const all = {
  id: 0,
  name: "Tous",
};

categories.unshift(all); /*Rajouter au debut du tableau */

/* Creer fonction Bouton*/

async function displayCategories(categories) {
  /*Choix de l'emplacement de la balise HTML*/

  const divCategories = document.querySelector(".filter");
  //console.log(divCategories);

  /*Boucle dans le tableau JSON */
  for (let i = 0; i < categories.length; i++) {
    //console.log(categories[i].name);

    /*Creation des balises HTML*/

    const buttonCategories = document.createElement("button");
    buttonCategories.innerText = categories[i].name;
    buttonCategories.classList.add("choice_pictures"); /*Ajout class*/
    buttonCategories.dataset.id = categories[i].id;

    console.log(buttonCategories);

    /* Lien entre les blocs enfant et parent*/

    divCategories.appendChild(buttonCategories);
    //console.log(divCategories);


    //_______________________________________________________________________________
//FILTRE SUR LES BOUTONS //


 buttonCategories.addEventListener("click", function () {

const worksFiltrees = works.filter(function (works) {
  if (i>0){
return works.categoryId === i}
else  {
  return works
}

  })
//console.log(worksFiltrees)


//if (i > 0){
document.querySelector(".gallery").innerHTML = "";
 displayWorks(worksFiltrees);
 //else{
 /* document.querySelector(".gallery").innerHTML = "";
  displayWorks(works)*/
 })

  }
}

displayCategories(categories);
//console.log(displayCategories);
displayWorks(works);
//console.log(displayWorks);



