// get monster info from the JSON file
var monsterURL = 'https://shakerbaker78.github.io./amy_baker_portfolio/block2/monster_faces/data/monster.json';
let createMonster = document.getElementById("makeMonster");

//createMonster.addEventListener("click", () => makeMonster("orange", 1));
console.log("I am working")

    // fetch the local json data
    fetch(monsterURL, {method: 'GET'})
    .then(response => response.json())
    .then(json => {
        //Create a monster object
        const monster = json['monsters'];
        console.log(typeof(monster))

        function displayBodies(){
        // loop through all items in the bodies object and display the bodies (that sounds so morbid!)
        const body_container = document.querySelector(`.body_container`);
        const bodies = monster.map(body => 
        `<div class = "body" id = "${body.color}Body">
        <img class "monsterBody" src = "${body.body}" alt = "${body.color} Body">
        </div>`).join(``);

        // Add the list items to the html
        body_container.innerHTML = bodies;

        }
    displayBodies()

    function displayFaces(color){
        // loop through all items in the bodies object and display the bodies (that sounds so morbid!)
        const face_container = document.querySelector(`.face_container`);
        const allFaces = monster.filter(monster => monster.color == color);
        console.log(allFaces)

// I think I am doing the array wrong and need to push each item maybe use map?
        const face = allFaces.faces
        console.log(face)
        //Iterate throught he faces aray and find the correct face
        for (let j = 0; j < face.length; j++){
            
                console.log("faces works")
                console.log(face[j])
            
                //Add the correct face to the page
                let monsterFace = document.createElement('img');
                monsterFace.setAttribute('class', 'monsterFace');
                monsterFace.setAttribute('src', face[j]);
                monsterFace.setAttribute('alt',"face " + (j + 1));
                document.querySelector('.results').appendChild(monsterFace);
            
        
        }
        // Add the list items to the html
        face_container.innerHTML = face;
        
        console.log(face)

        }
    displayFaces("yellow")

    })
