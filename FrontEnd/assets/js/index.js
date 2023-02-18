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


document.querySelector('.gallery')

const urlPhoto = 'http://localhost:5678/api/works';

      fetch(urlPhoto)
      .then(response=>response.json()
      .then(data=>console.log(data))
      );
  




