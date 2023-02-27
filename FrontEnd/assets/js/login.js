//Recuperation des elements du formulaire//
const email = document.getElementById("email");
const password = document.getElementById("password");

//Sélectionner le texte saisi dans le contrôle.//

document.getElementById("selectAll").onclick = function (event) {
  event.preventDefault(); // Permet de ne pas rediriger//

  // Recuperation API Login //
  let loginIn = fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    Authorization: `Bearer ${password}`,
    body: JSON.stringify({
      email: `${email.value}`,
      password: `${password.value}`,
    }),
  })
    .then((reponse) => reponse.json())
    .then((data) => console.log(data));

  //window.location.href = "./index.html";

  window.localStorage.setItem(
    "token",
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4`
  );
};

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
