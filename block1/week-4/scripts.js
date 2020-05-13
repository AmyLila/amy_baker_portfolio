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
    hero.name = orm.heroName.value; // create a name property based on the input field's value
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog

    hero.realName = form.realName.value; //Access the password field

    // Creates an empty array called powers and adds powers that are checked to the powers array
//     hero.powers = [];
//     for (let i=0; i < form.powers.length; i++) {
//         if (form.powers[i].checked) {
//          hero.powers.push(form.powers[i].value);
//     }
// }
    //This is the same code refactored
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);

    return hero;
}





// Chapter 6 Code Example




//Chapter 7


WebFont.load({
    google: {
      families: ['Arvo', 'Open+Sans' , 'Merriweather' , 'Special+Elite']
    }
  });
