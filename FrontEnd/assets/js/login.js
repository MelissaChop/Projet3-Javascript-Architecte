const loginForm = document.querySelector(".loginForm");

let user = {
  email: loginForm.querySelector("#email").value,
  password: loginForm.querySelector("#password").value,
};

// Recuperation API Login //
let login = await fetch("http://localhost:5678/api/users/login", {
  //console.log(login);
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(user),
});

const enterLogin = await login.json();
alert(enterLogin.message);

//Sélectionner le texte saisi dans le contrôle.//

document.getElementById("selectAll").onclick = function (event) {
  document.getElementById("password").select();
};
