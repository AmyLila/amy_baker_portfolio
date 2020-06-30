// get monster info from the JSON file
var monsterURL = 'https://shakerbaker78.github.io./amy_baker_portfolio/block2/monster_faces/data/monster.json';
let createMonster = document.getElementById("makeMonster");
//createMonster.addEventListener("click", makeMonster, false)
createMonster.addEventListener("click", () => makeMonster("yellow", 1));
console.log("I am working")

//To Do: Make a color argument and change the event listener so it works
function makeMonster(color, face_number) {
    console.log("Monster Function Working")
    fetch(monsterURL, {method: 'GET'})
    .then(response => response.json())
    .then(json => {
        console.log(json);
        const monster = json['monsters'];
        console.log(monster)
        for (let i = 0; i < monster.length; i++ ) {
            if (monster[i].color == color) {
                console.log("color works")
                
                let monsterImage = document.createElement('img');
                monsterImage.setAttribute('src', monster[i].body);
                monsterImage.setAttribute('alt', monster[i].color);

                document.querySelector('.results').appendChild(monsterImage);
                
            }
            
        }
    })


}

