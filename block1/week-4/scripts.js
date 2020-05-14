// Chapter 8 Code Example
//Accessing Form Elements
//const form = document.forms[0];
const form = document.forms['search'];
//Accessing the search input bar
const input = form.elements.searchInput;

//Events
//Focus Event
//input.addEventListener('focus', () => alert('focused'), false);

// Blur Event
// input.addEventListener('blur', () => alert('blurred'), false);

//Change Event
input.addEventListener('change', () => alert('changed'), false);

// Submit Event
form.addEventListener ('submit', search, false);
// function search() {
//     alert(' Form Submitted');
// }
//Submit Event and prevent default
// function search(event) {
//     alert('Form Submitted');
//     event.preventDefault();
// }


//Retrieving and Changing Values From a Form
//Reports back what the user searched for
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

// Set Value using JavaScript
input.value = 'Search Here';

// Make the text disapear when focused on
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false); // What does this "false" do?
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);


//Form Controls
const heroForm = document.forms['hero'];
heroForm.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = heroForm.heroName.value; // create a name property based on the input field's value
    hero.realName = heroForm.realName.value; //Access the password field

    // Creates an empty array called powers and adds powers that are checked to the powers array
//     hero.powers = [];
//     for (let i=0; i < form.powers.length; i++) {
//         if (heroForm.powers[i].checked) {
//          hero.powers.push(form.powers[i].value);
//     }
// }
    //This is the same code refactored
    hero.powers = [...heroForm.powers].filter(box => box.checked).map(box => box.value);
    // "This uses the spread operator to turn the node list into an array. This then allows us to use the filter() method that returns an array containing only the check boxes that were checked (this is because their 'checked' property will be truthy). We then chain the map() method to the end, which replaces each checkbox in the array with its 'value' property. This array is then returned and stored in the hero.powers variable."

    hero.category = heroForm.category.value; // Set the radio button value
    hero.age = heroForm.age.value; // Set the age number input
    hero.city = heroForm.city.value; //set the city property:
    hero.origin = heroForm.origin.value; // Set the origin property

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}
//custom Validation example
heroForm.addEventListener('submit',validate,false);
function validate(event) {
    const firstLetter = heroForm.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}
const label = heroForm.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);
function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

// Quiz Ninja Project
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonderwoman",realName: "Dianna Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
  ];
  
  // View Object
  const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    response: document.querySelector('#response'),
    render(target,content,attributes) { for(const key in attributes) {
          target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
      element.style.display = 'block';
    },
    hide(element){
      element.style.display = 'none';
    },
    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
        this.resetForm();
    },
    resetForm(){
        this.response.answer.value = '';
        this.response.answer.focus();
    },
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }
  };
  
  // Game Object
  const game = {
    start(quiz){
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();
    },
    ask(name){
        if(this.questions.length > 0) {
            this.question = this.questions.pop();
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question,question);
        }
        else {
            this.gameOver();
        }
    },
    check(event){
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            this.score++;
            view.render(view.score,this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        view.resetForm();
        this.ask();
    },
    gameOver(){
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
    }
  }
  
  view.start.addEventListener('click', () => game.start(quiz), false);
  view.response.addEventListener('submit', (event) => game.check(event), false);
  view.hide(view.response);



// Chapter 12 Code Examples
//Prototypal Inheritance
class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}
// make a new turtle
const leo = new Turtle('Leonardo');

// How do I get these in the HTML?
document.getElementById('turtle').innerHTML = leo.name;
document.getElementById ('turtleName').innerHTML = leo.sayHi();

// How do I get these into the HTML with a button?
let dis = func => document.getElementById ('turtleName2') .innerHTML = func;
const tButton = document.querySelector(`#turtleButton`);
tButton.addEventListener('click', dis(leo.attack()));




//Chapter 7


WebFont.load({
    google: {
      families: ['Arvo', 'Open+Sans' , 'Merriweather' , 'Special+Elite']
    }
  });
