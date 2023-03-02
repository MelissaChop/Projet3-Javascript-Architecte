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
          let alert = document.querySelector("form");

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
      console.log(data);

      console.log(data.token); // Vérifiez si data.token est correctement défini
      window.sessionStorage.setItem("User", JSON.stringify(data));
      console.log(window.sessionStorage);

      //let token = window.sessionStorage.getItem("Token");
      //console.log(token);

      //window.location.href = "./index.html";

      const toDelete = document.getElementById("toDelete");
      if (!toDelete) {
        return;
      } else {
        toDelete.remove();
      }
    })

    .catch((error) => console.error(error));
};

/*document.querySelector(".loginForm").onsubmit = async function (event) {
  event.preventDefault(); // Permet de ne pas rediriger//

  // Recuperation API Login //
  let log = await fetch(`http://localhost:5678/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: `${email.value}`,
      password: `${password.value}`,
    }),
  });
  //console.log(log);
  let userLog = await log.json();
  console.log(userLog);

  if (log.status === 200) {
    //Stockage du Token //
    window.sessionStorage.setItem("Token", JSON.stringify(userLog.token));
    console.log(window.sessionStorage);

    // window.location.href = "./index.html";
  } else if (log.status === 404 || log.status === 401) {
    alert("Email ou Mot de passe incorrect");
  }
};
let token = window.sessionStorage.getItem("Token");
console.log(token);*/
