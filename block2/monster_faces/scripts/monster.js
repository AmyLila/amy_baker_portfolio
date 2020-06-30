// get monster info from the JSON file
var monsterURL = 'https://shakerbaker78.github.io./amy_baker_portfolio/block2/monster_faces/data/monster.json';


function makeMonster() {
  fetch(monsterURL,{method: 'GET'})
    .then(response => response.json())
    .then(json => {
        console.log(jsonObject); //temporary checking for valid response and data parsing
        const monster = jsonObject['monsters'];

    })   
    .catch(error => console.error('error:', error));
}


