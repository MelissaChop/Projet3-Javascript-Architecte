//Recuperation des elements du formulaire//
const loginForm = document.querySelector(".loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
//console.log(loginForm);
//console.log(email);
//console.log(password);

let user = {
  email: loginForm.email.value,
  password: loginForm.password.value,
};
//console.log(user);

// Recuperation API Login //

let loginIn = await fetch("http://localhost:5678/api/users/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(user),
});

//console.log(loginIn);

const enterLogin = await loginIn.json();
//alert(enterLogin.message);

//console.log(enterLogin);
async function userLog(enterLogin) {
  // Recuperation ID //
  const userId = window.sessionStorage.getItem(userId);
  // Test recuperation TOken
  const token =
    window.sessionStorage.getItem(token); /*SessionStorage : reste actif le 
temsps que la page est lance, incluant les rechargement et restauration de page*/
}
//console.log(userLog);

//Sélectionner le texte saisi dans le contrôle.//

document.getElementById("selectAll").onclick = function (event) {
  document.getElementById("password").select();
};
