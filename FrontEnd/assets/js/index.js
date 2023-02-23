
                  /* Appel API Works*/


          


const worksApi = await fetch('http://localhost:5678/api/works')
//console.log(worksApi);

 /*Mettre au format JSON */
const works = await worksApi.json();
//console.log(works);

          
  /* Creer fonction Portfolio*/
  async function displayWorks(works) {  

  /*Choix de l'emplacement de la balise HTML*/

  const divGallery = document.querySelector (".gallery");
  //console.log(divGallery);


    
/*Boucle dans le tableau JSON */
for (let i=0;i < works.length; i++) {
    //console.log(works[i].title + ', ' + works[i].imageUrl);

  /*Creation des balises HTML*/
  
  const worksElement = document.createElement("figure");
  worksElement.dataset.id = works[i].id;
  worksElement.dataset.categoryId = works[i].categoryId;
  //console.log(worksElement);

  const image = document.createElement("img");
  image.src= works[i].imageUrl;
  image.crossOrigin = 'anonymous';
  image.alt= works[i].title;
  //console.log(image);

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
}



                      /* CREATION BOUTONS*/

/* Creer fonction Bouton*/
     
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


/* Creer fonction Bouton*/

async function displayCategories(categories) { 



/*Choix de l'emplacement de la balise HTML*/

const divCategories = document.querySelector(".filter");
//console.log(divCategories);



/*Boucle dans le tableau JSON */
for (let i=0;i < categories.length; i++) {
  //console.log(categories[i].name);

  /*Creation des balises HTML*/

  const buttonCategories = document.createElement("button");
  buttonCategories.innerText = categories[i].name;
  buttonCategories.classList.add("choice_pictures"); /*Ajout class*/
  buttonCategories.dataset.id = categories[i].id;

  //console.log(buttonCategories);

    /* Lien entre les blocs enfant et parent*/

    divCategories.appendChild(buttonCategories);
    //console.log(divCategories);






    let bouton = document.getElementById("filter"); /*recupere bouton */
    //console.log(bouton);
    const displayCategories = (buttonCategories) 
    //console.log(buttonCategories);
    //displayWorks = (works[i].categoryId)
    //console.log(works[i].categoryId)

    bouton.addEventListener("click", (buttonCategories) => {/* Renvoi element Action*/
    //console.log(buttonCategories.target.textContent);

    })

}
}

displayCategories(categories);
//console.log(displayCategories);
displayWorks(works);
//console.log(displayWorks);


//ENCORE UN TEST //



/*async function updateWorks(categoryId) {
const works = await getFilteredWorks(categoryId);
const divGallery = document.querySelector(".gallery");
divGallery.innerHTML = "";

for (let i = 0; i < works.length; i++) {
// création des éléments HTML pour chaque œuvre
// ajout des éléments HTML à la galerie
}
}







//TEST RATE

/**async function filterBouton( displayCategories , displayWorks ) {  
 // console.log(displayWorks);
 let action = document.getElementById("choice_pictures");
 //console.log(action)
 action.addEventListener("click", () => {/* Renvoi element Action*/
//console.log(action);
/*buttonCategories(categories) = buttonCategories.filter(categories[i].id === works[i].categoryId );
/*return (buttonCategories);
**});
//}


// CREATION BOUTONS ACTIF // 

// 1ER TEST//

//FILTRE
//let action= document.getElementById("choice_pictures");
//console.log(action);

//buttonCategories.addEventListener('click', () => {
//  const  buttonFiltre = 
  
//});

//2ND TEST//


//let action = document.getElementById("filter");
//console.log(action);
//action.addEventListener("click", (event) => {/* Renvoi element Action*/
//console.log(event.target.textContent);
//}) ;



//const boutonFiltre = document.querySelector(".filter");
//boutonFiltre.addEventListener("click", function() {


//})


  




  
  









                  /*Filtre des works : Test */ 

/*let action= document.getElementById("monBouton"); /*recupere bouton */
//console.log(action.textContent);

/*action.addEventListener("click", (event) => {
  //console.log(event.target.textContent);
}) /* Renvoi element Action*/

