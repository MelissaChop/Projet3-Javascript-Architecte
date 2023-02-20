
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
  worksElement.dataset.id = works[i].id;
  worksElement.dataset.categoryId = works[i].categoryId;
  //console.log(worksElement);

  const image = document.createElement("img");
  image.src= works[i].imageUrl;
  image.crossOrigin = 'anonymous';
  image.alt= works[i].title;
  //console.log(imageUrl);

  const titleElement = document.createElement ("figcaption");
  titleElement.innerText = works[i].title;
  //console.log(titleElement);

  /* Lien entre les blocs enfant et parent*/
  worksElement.appendChild(image);
  //console.log(worksElement);

  worksElement.appendChild(titleElement);

  divGallery.appendChild(worksElement);
    //console.log(divGallery);
}






                      /* CREATION BOUTONS*/
 const categoriesApi= await fetch(`http://localhost:5678/api/categories`)
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

/*Boucle dans le tableau JSON */
for (let i=0;i < categories.length; i++) {
  //console.log(categories[i].name);

    /*Choix de l'emplacement de la balise HTML*/

  const divCategories = document.querySelector(".filter");
  //console.log(divCategories);

  /*Creation des balises HTML*/

  const buttonCategories = document.createElement("button");
  buttonCategories.innerText = categories[i].name;
  buttonCategories.classList.add("choice_pictures"); /*Ajout class*/
  buttonCategories.dataset.id = categories[i].id;
  //console.log(buttonCategories);

  /* Lien entre les blocs enfant et parent*/

  divCategories.appendChild(buttonCategories);
  //console.log(divCategories);
}







                  /*Filtre des works : Test */ 

let action= document.getElementById("monBouton"); /*recupere bouton */
//console.log(action.textContent);

action.addEventListener("click", (event) => {
  //console.log(event.target.textContent);
}) /* Renvoi element Action*/



