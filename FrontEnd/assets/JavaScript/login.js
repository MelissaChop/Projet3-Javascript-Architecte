fetch('http://localhost:5678/api/users/login')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
});