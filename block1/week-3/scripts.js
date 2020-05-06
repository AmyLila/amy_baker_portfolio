var Apod_URL = 'https://api.nasa.gov/planetary/apod';
var apiKey = 'yeVL7qV2WbHyqLfR0HV3AZrEW57kcFuyH2SmiifQ'

function helloAPOD() {
     var request = new XMLHttpRequest();
     request.open('GET', Apod_URL + '?api_key=' + apiKey, true);

     request.addEventListener('load',() => {
           if(request.status >= 200 && request.status < 400) {
                var response = JSON.parse(request.responseText);
                 console.log(response);
                 document.getElementById('original').innerHTML = response.explanation;
                 document.getElementById('originalImg').src = response.url;
           }
          else {
             console.log("Error in network request: " + request.statusText);
          }
    }
   );
     request.send(null);
}

function helloAPODV2() {
  fetch(    Apod_URL + '?api_key=' + apiKey,     {method: 'GET'}   )
    .then(response => response.json())
    .then(json => {
      document.getElementById('fetch').innerHTML = json.explanation;
      document.getElementById('fetchImg').src = json.url;
      console.log(json)
    })
    .catch(error => console.error('error:', error));
}
