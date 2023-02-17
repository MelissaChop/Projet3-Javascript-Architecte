// Debut du code JS //
// Appel de l' API 

fetch('http://localhost:5678/api/users/login')
.then(function() {

})
.catch(function() {

});


  // Creation boutons // 

const reponse = await fetch("http://localhost:5678/api/categories"){
	method: "POST",
	headers: {"content-type": "./api/categories"},
	body: {"Objets"}
}
// -> penser a boutondataset.categoryId cf API  et pour lire element.dataset
//  Donc avec data-id

//localStorage.setItems('id','valeur','cle') 

// Creation partie Gallery //

const reponse = await fetch ("http://localhost:5678/api/works"){
  method: "POST",
	headers: {"content-type": "./api/works"},
	body: {"Objets"}
}

