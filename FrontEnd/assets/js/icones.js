function garbage() {
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("boxGarbage");

  let iconeGarbage = document.createElement("img");
  iconeGarbage.src =
    "C:/Users/user/Desktop/Developpement-web/Projet.3/Projet3-Javascript-Architecte/FrontEnd/assets/icons/Vector.png";
  iconeGarbage.classList.add("iconeGarbage");

  imgDiv.appendChild(iconeGarbage);

  console.log(iconeGarbage);
}

//console.log(garbage);

function expand() {
  let iconDiv = document.createElement("div");
  iconDiv.classList.add("boxExpand");

  let iconeExpand = document.createElement("img");
  iconeExpand.src = "./assets/icons/XMLID_71_.png";

  iconDiv.appendChild(iconeExpand);
}
