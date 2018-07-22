// ()

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
var movieTitle = "Argo";
var url = " http://www.omdbapi.com/?t=" + movieTitle + "&apikey=e42e14ed";
// async call
request.open('GET', url, true);

request.onload = function () {
  // Begin accessing JSON data here
  	var data = JSON.parse(this.response);
  	var title = document.getElementById('title');
  	var director = document.getElementById('director');
  	var genre = document.getElementById('genre');

  	if(request.status == 200 && request.readyState == 4) {
  		var year = "(" + data.Year + ")";
  		title.innerHTML = data.Title + " " + year;
  		director.innerHTML = data.Director;
  		genre.innerHTML = data.Genre;
  	} else {
  		console.log(request.status + " " + request.statusText);
  	}
  	
}
// Send request
request.send();