// Debut du code JS //

// Appel de l' API 
//const lienApi = await fetch("http://localhost:5678/api/");
//console.log(lienApi)
//api = await lienApi.json();
//const sectionSite = JSON.stringify(api);


	// Stockage des informations dans le localStorage
  //window.localStorage.setItem("sections", sectionSite);

                 // Creation boutons // 
//  const categoryId = await fetch ('https://mon-api.com/categories');
//  const button = await reponse.json;
//  for (let i = 0; i < button.length; i++) {
//  const categories = button[i];
//  const divFilter = document.querySelector(".filter");

  //boutonFiltre.addEventListener("click", function(){}) GARDER EN COMMENTAIRE 

//const buttonElement = document.createElement("categories");

//const nameElement = document.createElement("button");
//nameElement.innerText = categories.name;
		
//divFilter.appendChild(buttonElement);
//buttonElement.appendChild (nameElement);

//console.log(divFilter);  }

// *GARDER EN COMMENTAIRE
//const reponse = await fetch("http://localhost:5678/api/categories"){
//	method: "POST",
//	headers: {"content-type": "/api/categories"},
//	body: {"Objets"}}

// -> penser a boutondataset.categoryId cf API  et pour lire element.dataset
//  Donc avec data-id

//localStorage.setItems('id','valeur','cle') 

//* //

// Creation partie Gallery , recuperation des Works//

              // recuperation des images
//const reponse = await fetch ('http://localhost:5678/api/works')
//const works = await reponse.json;

//for (let i = 0; i < works.length; i++) {
//  const photo = works[i];

//  const divGallery = document.querySelector (".gallery");
  
//  const worksElement = document.createElement("photo");

//  const imageElement = document.createElement("img");
//  imageElement.src= photo.image;
//  const nameElement = document.createElement ("figcaption");
//  nameElement.innerText = photo.name;
		
//divGallery.appendChild(worksElement)

//  worksElement.appendChild(imageElement);
//  worksElement.appendChild(nameElement);

//  console.log(divGallery);
//}

//const reponse = await fetch ("http://localhost:5678/api/works"){
//  method: "POST",
//	headers: {"content-type": "./api/works"},
//	body: {"Objets"}}

//const lienApi = fetch('http://localhost:5678/api/users/login')
//console.log (lienApi)

//const worksApi =  'http://localhost:5678/api/works';

//    fetch(worksApi).then(async(response)=>
 //     response.json().then((data)=>
 //     console.log(data))
 //     );


 /* TENTATIVE DE FAIRE COMME LE COURS: NE FONCTIONNE PAS /
  
/*fetch ("http://127.0.0.1:5500/FrontEnd/");

async function fetchworks(){
const worksApi = await fetch('http://localhost:5678/api/works');
const photo = await worksApi.json();


const works= photo[0];

const imageUrl = document.createElement ("img");
imageUrl.dataset = works.imageUrl;

const title = document.createElement ("h3");
title.dataset = works.title;

const divGallery = document.querySelector(".gallery");
divGallery.appendChild(imageUrl);
divGallery.appendChild(title);

}*/
const worksContener = document.querySelector('.gallery');


const worksApi = fetch(`http://localhost:5678/api/works`)
 worksApi
  .then(async(response)=>{
    console.log(response);

const works = await response.json();
  console.log(works);
});

const photo = worksApi;

const imgElement = document.createElement('img');
  imgElement.src = worksApi.imageUrl;

const nameElement = document.createElement('figcaption');
  nameElement.innerText = worksApi.title;


// Rattacher a l'element parent

worksContener.appendChild(imgElement);
worksContener.appendChild(nameElement);

for(let i=0; i<worksApi.length; i++ );
console.log(worksApi);


