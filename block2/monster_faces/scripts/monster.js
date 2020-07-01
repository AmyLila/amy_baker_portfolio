// get monster info from the JSON file
var monsterURL = 'https://shakerbaker78.github.io./amy_baker_portfolio/block2/monster_faces/data/monster.json';
let createMonster = document.getElementById("makeMonster");
//createMonster.addEventListener("click", makeMonster, false)
createMonster.addEventListener("click", () => makeMonster("orange", 1));
console.log("I am working")

// make a monster function to call the correct pictures.
//Function takes a color and face number parameter
function makeMonster(color, face_number) {
    console.log("Monster Function Working")

    // fetch the local json data
    fetch(monsterURL, {method: 'GET'})
    .then(response => response.json())
    .then(json => {
        console.log(json);

        //Create a monster object
        const monster = json['monsters'];
        console.log(typeof(monster))

        //Iterate through the monster object and match the color 
        for (let i = 0; i < monster.length; i++ ) {
            if (monster[i].color == color) {
                console.log("color works")
                
                //dislay the correct colored body
                let monsterImage = document.createElement('img');
                monsterImage.setAttribute('class', 'monsterBody');
                monsterImage.setAttribute('src', monster[i].body);
                monsterImage.setAttribute('alt', monster[i].color);
                document.querySelector('.results').appendChild(monsterImage);

                
                const faces = monster[i].faces
                //Iterate throught he faces aray and find the correct face
                for (let j = 0; j < faces.length; j++){
                    if (j == face_number) {
                        console.log("faces works")
                        console.log(faces[j])
                    
                        //Add the correct face to the page
                        let monsterFace = document.createElement('img');
                        monsterFace.setAttribute('class', 'monsterFace');
                        monsterFace.setAttribute('src', faces[j]);
                        monsterFace.setAttribute('alt',"face " + (face_number + 1));
                        document.querySelector('.results').appendChild(monsterFace);
                    }
                
                }

                
            }
            
        }
    })


}

