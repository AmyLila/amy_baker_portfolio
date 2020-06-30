// get monster info from the JSON file
var monsterURL = 'https://shakerbaker78.github.io./amy_baker_portfolio/block2/monster_faces/data/monster.json';

console.log("I am working")

function makeMonster() {
    console.log("Monster Function Working")
  fetch(monsterURL,{method: 'GET'})
    .then(response => response.json())
    .then(json => {
        console.log(jsonObject); //temporary checking for valid response and data parsing
        const monster = jsonObject['monsters'];
        for (let i = 0; i < monster.length; i++ ) {
            if(monster[i].color == "green"){
                console.log("Green Working")

            }
            

        }
        

    })   
    .catch(error => console.error('error:', error));
}


