


 //TEST 

                  /* Appel API Works*/
const worksApi = await fetch('http://localhost:5678/api/works')
//console.log(worksApi);

 /*Mettre au format JSON */
const works = await worksApi.json();
//console.log(works);

/*Boucle dans le tableau JSON */
for (let i=0;i < works.length; i++) {
  //console.log(works[i].title + ', ' + works[i].imageUrl);

  /*Choix de l'emplacement de la balise HTML*/

const divGallery = document.querySelector (".gallery");
//console.log(divGallery);

 /*Creation des balises HTML*/
  
const worksElement = document.createElement("figure");
//console.log(worksElement);

const imageUrl = document.createElement("img");
imageUrl.src= works[i].imageUrl;
//console.log(imageUrl);

const titleElement = document.createElement ("figcaption");
titleElement.innerText = works[i].title;
//console.log(titleElement);

/* Lien entre les blocs enfant et parent*/

divGallery.appendChild(worksElement);
//console.log(divGallery);

worksElement.appendChild(imageUrl);
console.log(worksElement);

worksElement.appendChild(titleElement);
}


/* CREATION BOUTONS*/
 const categoriesApi= await fetch(`http://localhost:5678/api/categories`)
 //console.log(categoriesApi);

  /*Mettre au format JSON */
 const categories = await categoriesApi.json();
//console.log(categories);

/*Boucle dans le tableau JSON */
for (let i=0;i < categories.length; i++) {
//console.log(categories[i].name);

  /*Choix de l'emplacement de la balise HTML*/

const divCategories = document.querySelector(".filter");
//console.log(divCategories);

/*Creation des balises HTML*/

const buttonCategories = document.createElement("button");
buttonCategories.innerText = categories[i].name;
//console.log(buttonCategories);

/* Lien entre les blocs enfant et parent*/

divCategories.appendChild(buttonCategories);
console.log(divCategories)


}

