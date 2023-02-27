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
          alert((reponse.message = "Non trouvé"));
          console.log("test" + reponse.status);
        } else if (reponse.status === 401) {
          alert((reponse.message = "Utilisateur non autorisé"));
        }
      }

      reponse.json();
    })
    .then((data) => {
      console.log(data);
      window.sessionStorage.setItem("user", JSON.stringify(data));
    })

    .catch((error) => console.log(error));
};

//Authorization: `Bearer ${token}`,

// Redirection si user autorise//
//window.location.href = "./index.html";

//const enterLogin = await loginIn.json();
//alert(enterLogin.message);

/*async function userLog(enterLogin) {
  // Recuperation ID //
  const userId = window.sessionStorage.getItem(userId);
  // Test recuperation TOken
  const token =
    window.sessionStorage.getItem(token); /*SessionStorage : reste actif le 
temsps que la page est lance, incluant les rechargement et restauration de page*/
/*}*/
//console.log(userLog);
