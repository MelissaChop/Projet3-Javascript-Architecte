//Recuperation des elements du formulaire//
const email = document.getElementById("email");
const password = document.getElementById("password");

//Sélectionner le texte saisi dans le contrôle.//

document.querySelector(".loginForm").onsubmit = function (event) {
  event.preventDefault(); // Permet de ne pas rediriger//

  // Recuperation API Login //
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
          alert("Utilisateur non trouvé");
          //console.log("test" + reponse.status);
        } else if (reponse.status === 401) {
          alert("Utilisateur non autorisé");
        }
        throw new Error("Erreur détectée!");
      }
      return reponse.json();
    })

    .then((data) => {
      console.log(data);
      window.sessionStorage.setItem("Token", JSON.stringify(data.token));
      // window.sessionStorage.setItem("User", data.userId);
      console.log(window.sessionStorage);

      let token = window.sessionStorage.getItem("Token");
      console.log(token);
    })

    .catch((error) => console.error(error));
};
