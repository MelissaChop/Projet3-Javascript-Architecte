let user = {
  userId: 1,
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4",
};

let login = await fetch("http://localhost:5678/api/users/login", {
  //console.log(login);
  method: "POST",
  headers: {
    "Content-Type": "application/json,charset=utf-8",
  },
  body: JSON.stringify(user),
});

const enterLogin = await login.json();
alert(enterLogin.message);

//Sélectionner le texte saisi dans le contrôle.//

document.getElementById("selectAll").onclick = function (event) {
  document.getElementById("userPassword").select();
};
