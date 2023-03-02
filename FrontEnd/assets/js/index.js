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
    if (categories[i].id === 0) {
      buttonCategories.classList.add("active");
    }

    //console.log(buttonCategories);

    /* Lien entre les blocs enfant et parent*/

    divCategories.appendChild(buttonCategories);
    //console.log(divCategories);

    //_______________________________________________________________________________
    //FILTRE SUR LES BOUTONS //

    buttonCategories.addEventListener("click", function () {
      let worksFiltrees = works;

      if (categories[i].id != 0) {
        worksFiltrees = works.filter(function (work) {
          return work.categoryId === categories[i].id;
        });
      }
      document.querySelector(".gallery").innerHTML = "";
      displayWorks(worksFiltrees);

      document.querySelector(".active").classList.remove("active");
      buttonCategories.classList.add("active");
    });
  }
}

displayCategories(categories);
//console.log(displayCategories);
displayWorks(works);
//console.log(displayWorks);

const token = window.sessionStorage.getItem("User");
const button = document.querySelector(".filter");
const gallery = document.getElementById("gallery");
console.log(token);
if (token != null) {
  button.remove();
  gallery.style.marginTop = "92px";

  //Ajout En tete //
  //Barre noir //
  const enTete = document.getElementById("barre");
  enTete.style.height = "59px";
  enTete.style.width = "100%";
  enTete.style.backgroundColor = "black";

  // Texte//
  const modEd = document.getElementById("modEd");
  modEd.innerText = "Mode édition";
  modEd.style.marginRight = "21px";
  modEd.style.color = "white";

  const publiChang = document.getElementById("publiChang");
  publiChang.innerText = "publier les changements";
  publiChang.style.backgroundColor = "white";
  publiChang.style.paddingRight = "23px";
  publiChang.style.paddingLeft = "23px";
  publiChang.style.paddingTop = "11px";
  publiChang.style.paddingBottom = "11px";
  publiChang.style.maxWidth = "216px";
  publiChang.style.maxHeight = "38px";
  publiChang.style.borderRadius = "25px";

  //console.log(enTete);

  //Ajout "Modifié"
  const photoProfil = document.querySelector("#introduction");
  const modifProfil = document.createElement("a");
  photoProfil.appendChild(modifProfil);
  modifProfil.innerText = "modifier";
  modifProfil.style.marginLeft = "30%";
  modifProfil.style.marginTop = "1%";
  modifProfil.style.minWidth = "100%";

  const titreProjet = document.querySelector("#titre");
  const modifProjet = document.createElement("a");
  titreProjet.appendChild(modifProjet);
  modifProjet.innerText = "modifier";
  modifProjet.style.fontSize = "14px";
  modifProjet.style.fontWeight = "400";
  modifProjet.style.color = "black";
  modifProjet.style.fontFamily = "Work sans";
  modifProjet.style.marginLeft = "57px";
  //console.log(titreProjet);

  const intro = document.querySelector("#introduction article");
  const modifIntro = document.createElement("a");
  intro.appendChild(modifIntro);
  intro.insertBefore(modifIntro, intro.firstChild);
  modifIntro.innerText = "modifier";
  modifIntro.style.paddingBottom = "10%";
  console.log(intro);

  const titre = document.querySelector("#introduction article h2");
  titre.style.marginTop = "5%";
}
