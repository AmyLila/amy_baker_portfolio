// Chapter 5 Code Example

const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];
  
const game = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;
        // main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        const response =  prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
        alert('Correct!');
        this.score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}

  

// Chapter 6 Code Example

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
};

const game2 = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;
        // main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        const response =  prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        alert('Correct!');
        this.score++;
        view.render(view.score,this.score);
        } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}


// Callback NASA example
var Apod_URL = 'https://api.nasa.gov/planetary/apod';
var apiKey = 'DHWf9NoDJKU9m25RKvQoNiv7ftd9jDzJsWVBVkdV'

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
