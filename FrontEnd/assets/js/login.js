//Recuperation des elements du formulaire//
const email = document.getElementById("email");
const password = document.getElementById("password");

//Sélectionner le texte saisi dans le contrôle.//

document.querySelector(".loginForm").onsubmit = function (event) {
  event.preventDefault(); // Permet de ne pas rediriger//

  // Envoie du login et verification si bon ou non  //
  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: `${email.value}`,
      password: `${password.value}`,
    }),
  })
    .then((reponse) => {
      if (!reponse.ok) {
        if (reponse.status === 404) {
          let alert = document.querySelector("form");

          // Affichage de message si le mail ou le mot de passe est faux
          let message = document.createElement("p");
          message.setAttribute("id", "toDelete");
          let locationMessage = alert.firstChild;
          alert.insertBefore(message, locationMessage);

          message.style.color = "red";
          message.innerText = "Utilisateur non trouvé!";
        } else if (reponse.status === 401) {
          let alert = document.querySelector("form");

          let message = document.createElement("p");
          message.setAttribute("id", "toDelete");
          let locationMessage = alert.firstChild;
          alert.insertBefore(message, locationMessage);

          message.style.color = "red";
          message.innerText = "Utilisateur non autorisé!";
        }

        throw new Error("Erreur détectée!");
      }
      return reponse.json();
    })

    .then((data) => {
      //console.log(data);

      //console.log(data.token); // Vérifiez si data.token est correctement défini
      // Si Mot de passe et mail est juste alors redirection vers la Galery avec l'affichage conecte
      window.sessionStorage.setItem("User", JSON.stringify(data));

      console.log(window.sessionStorage);

      window.location.href = "./index.html";
    })

    .catch((error) => console.error(error));

  // Retrait du message d'erreur pour proprete de l'affichage
  const toDelete = document.getElementById("toDelete");
  if (!toDelete) {
    return;
  } else {
    toDelete.remove();
  }
};
