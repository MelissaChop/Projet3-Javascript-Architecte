import { displayWorks } from "./index.js";

// Rappel des works de ma fonction DisplayWorks, dans la nouvelle fonction WorksD
export async function displayWorksD(works) {
  // Nettoyage avant chaque affichage pour ne pas en avoir plusieur sur la même page
  document.querySelector(".galleryModal").innerHTML = "";

  /* Creer fonction Portfolio*/
  /*Recuperation de l'emplacement de la balise HTML*/

  const divGalleryD = document.querySelector(".galleryModal");

  /* Boucle pour afficher tous les works dans un element Figure, 
  qui contient des image et leur figcaption*/
  /*Boucle sur le tableau de works */
  for (let i = 0; i < works.length; i++) {
    /*Creation des balises HTML*/

    const worksElement = document.createElement("figure");
    worksElement.dataset.id = works[i].id;
    worksElement.dataset.categoryId = works[i].categoryId;

    const image = document.createElement("img");
    image.src = works[i].imageUrl;
    image.crossOrigin = "anonymous";
    image.alt = works[i].title;
    image.classList.add("imgWorks");

    const titleElement = document.createElement("figcaption");
    titleElement.innerText = "éditer";

    // ICONE Garbage

    // Ajout de l'icone Garbage pour chaque works
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("boxGarbage");

    let iconeGarbage = document.createElement("img");
    iconeGarbage.src = "./assets/icons/Vector.png";
    iconeGarbage.classList.add("iconeGarbage");

    imgDiv.appendChild(iconeGarbage);

    worksElement.appendChild(imgDiv);

    //ICONE expand
    // Ajout de l'icone expand, pour chaque works

    let iconDiv = document.createElement("div");
    iconDiv.classList.add("boxExpand");

    let iconeExpand = document.createElement("img");
    iconeExpand.src = "./assets/icons/XMLID_71_.png";
    iconeExpand.classList.add("iconeExpand");

    iconDiv.appendChild(iconeExpand);

    worksElement.appendChild(iconDiv);

    /* Lien entre les blocs enfant et parent*/
    worksElement.appendChild(image);

    worksElement.appendChild(titleElement);

    divGalleryD.appendChild(worksElement);

    /* Afficher element - Ajoutez un gestionnaire d'événements  pour l'événement mouseover 
    sur l'élément cible ( qui ce declenche au survol d'un element)*/
    worksElement.addEventListener("mouseover", function () {
      // Affichez l'élément à afficher
      iconDiv.style.display = "block";
    });

    /* Cacher element - Ajoutez un gestionnaire d'événements pour l'événement mouseout sur 
    l'élément cible ( qui ce declenche au survol d'autre element que l'element cible, en 
    dehors de la zone)*/
    worksElement.addEventListener("mouseout", function () {
      // Masquez l'élément à afficher
      iconDiv.style.display = "none";
    });

    //DELETE//
    // Recuperation via de  session storage de l'User ( Token + User)
    const token = window.sessionStorage.getItem("User");

    // Recuperation du Token
    const tokenObj = JSON.parse(token);

    // au click sur l'element garbage
    iconeGarbage.addEventListener("click", function (event) {
      event.preventDefault();
      let worksDel = parseInt(
        worksElement.dataset.id
      ); /* Permet de convertir la chaine de caractere 
      en nombre entier. Permettra la supression de part l'id*/

      /* Envoie d'une requete delete a l'API en incluant le token
       d'authentification pour l'autorisation*/

      fetch(`http://localhost:5678/api/works/${worksDel}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${tokenObj.token}`,
        },
      })
        .then((reponse) => {
          if (reponse.status === 401) {
            console.error("Impossible d'effectuer la suppression");
            window.location.href = "./login.html";
          } else if (!reponse.ok) {
            throw new Error("Erreur détectée!");
          }
          // Si pas erreur alors suppresion du works en fonction de l'id
          let index = works.findIndex((work) => work.id === worksDel);
          works.splice(index, 1);
          // Affichage du tableau de works incluant les delete
          displayWorksD(works);

          displayWorks(works);

          return false;
        })

        .catch((error) => {
          console.error(
            "Une erreur est survenue lors de la suppression",
            error
          );
        });
    });
  }
}
