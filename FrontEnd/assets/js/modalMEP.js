async function displayWorksD() {
  const worksD = await fetch("http://localhost:5678/api/works", {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  //console.log(worksD);

  /*Mettre au format JSON */
  const works = await worksD.json();
  //console.log(works);

  /* Creer fonction Portfolio*/
  /*Choix de l'emplacement de la balise HTML*/

  const divGalleryD = document.querySelector(".galleryModal");
  // console.log(divGalleryD);

  /*Boucle dans le tableau JSON */
  for (let i = 0; i < works.length; i++) {
    //console.log(works[i].title + ", " + works[i].imageUrl);

    /*Creation des balises HTML*/

    const worksElement = document.createElement("figure");
    worksElement.dataset.id = works[i].id;
    worksElement.dataset.categoryId = works[i].categoryId;
    //console.log(worksElement);*/

    const image = document.createElement("img");
    image.src = works[i].imageUrl;
    image.crossOrigin = "anonymous";
    image.alt = works[i].title;
    image.classList.add("imgWorks");
    //console.log(image);

    const titleElement = document.createElement("figcaption");
    titleElement.innerText = "éditer";
    //console.log(titleElement);

    // ICONE Garbage
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("boxGarbage");

    let iconeGarbage = document.createElement("img");
    iconeGarbage.src = "./assets/icons/Vector.png";
    iconeGarbage.classList.add("iconeGarbage");

    imgDiv.appendChild(iconeGarbage);

    worksElement.appendChild(imgDiv);

    //console.log(iconeGarbage);

    //ICONE expand

    let iconDiv = document.createElement("div");
    iconDiv.classList.add("boxExpand");

    let iconeExpand = document.createElement("img");
    iconeExpand.src = "./assets/icons/XMLID_71_.png";
    iconeExpand.classList.add("iconeExpand");

    iconDiv.appendChild(iconeExpand);

    worksElement.appendChild(iconDiv);

    /* Lien entre les blocs enfant et parent*/
    worksElement.appendChild(image);
    //console.log(worksElement);

    worksElement.appendChild(titleElement);

    divGalleryD.appendChild(worksElement);
    //console.log(divGallery);

    // Ajoutez un gestionnaire d'événements pour l'événement mouseover sur l'élément cible
    worksElement.addEventListener("mouseover", function () {
      // Affichez l'élément à afficher
      iconDiv.style.display = "block";
    });

    // Ajoutez un gestionnaire d'événements pour l'événement mouseout sur l'élément cible
    worksElement.addEventListener("mouseout", function () {
      // Masquez l'élément à afficher
      iconDiv.style.display = "none";
    });

    //DELETE//
    const token = window.sessionStorage.getItem("User");
    const tokenObj = JSON.parse(token);
    //console.log(tokenObj);

    iconeGarbage.addEventListener("click", function (event) {
      event.preventDefault();
      let worksDel = worksElement.dataset.id;
      //console.log(worksDel);

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
          } /*else if (reponse.status === 204) {
            console.log("Erreur");
            return; // Ajout de l'instruction de retour ici
          }*/
          document.querySelector(".gallery").innerHTML = "";
          displayWorks(worksDel);
          return false;
        })
        .catch((error) => {
          console.error(
            "Une erreur est survenue lors de la suppression",
            error
          );
        });
    });

    // Sélectionnez l'élément allDelete et ajoutez un écouteur d'événement "click"
    const allDelete = document.querySelector(".removeGallery");
    allDelete.addEventListener("click", function (event) {
      event.preventDefault();

      // Récupérez le token d'authentification depuis la sessionStorage
      const token = window.sessionStorage.getItem("User");
      const tokenObj = JSON.parse(token);

      // Parcourez tous les éléments de la liste des works et supprimez-les individuellement
      const worksElements = document.querySelectorAll(".works");
      worksElements.forEach((worksElement) => {
        let worksDelT = worksElement.dataset.id;

        fetch(`http://localhost:5678/api/works/${worksDelT}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${tokenObj.token}`,
          },
        });
      });

      // Videz la galerie après avoir supprimé tous les éléments
      document.querySelector(".gallery").innerHTML = "";
      document.querySelector(".galleryModal").innerHTML = "";
      displayWorks(worksDelT);
    });
  }
}

displayWorksD();
