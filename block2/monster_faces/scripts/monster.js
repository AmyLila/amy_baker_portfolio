
//global Variables
const monsterURL = 'https://shakerbaker78.github.io./amy_baker_portfolio/block2/monster_faces/data/monster.json';
const createMonster = document.getElementById("makeMonster");

// get monster info from the JSON file
    // fetch the local json data
    fetch(monsterURL, {method: 'GET'})
    .then(response => response.json())
    .then(json => {
        //Create a monster object
        const monster = json['monsters'];
        console.log(typeof(monster))

    // display all the body choices    
    function displayBodies(){
        // loop through all items in the bodies object and display the bodies (that sounds so morbid!)
        const body_container = document.querySelector(`.body_container`);
        const bodies = monster.map(body => 
        `<div class = "body" id = "${body.color}Body">
        <img class "monsterBody" src = "${body.body}" alt = "${body.color} Body">
        </div>`).join(``);

        // Add the list items to the html
        body_container.innerHTML = bodies;

    }//End Display Bodies Function
    // Call display bodies    
    displayBodies()

    //function to filter the monster object by color. 
    function filterColor(color){
        return monster.filter(monster => monster.color == color);
    }

    // Display all the faces of a given color
    function displayFaces(color){
       
        //filter the monster file to an object with only the values from the selected color
        const allFaces = filterColor(color);

        // create a faces object with all of the faces of one color in it.
        const face = allFaces[0].faces
        console.log(typeof(face))

        //Iterate throught he faces aray and find the correct face
        for (let j = 0; j < face.length; j++){
            
                console.log("faces works")
                console.log(face[j])
            
                //Add the divs that hold the face images
                let faceDiv = document.createElement('div')
                faceDiv.setAttribute('class', 'face')
                faceDiv.setAttribute('id', 'face' + [j]);
                document.querySelector('.face_container').appendChild(faceDiv)

                //Add the face images
                let monsterFace = document.createElement('img');
                monsterFace.setAttribute('class', 'monsterFace');
                monsterFace.setAttribute('src', face[j]);
                monsterFace.setAttribute('alt',"face " + (j + 1));
                document.querySelector('#face' + [j]).appendChild(monsterFace);
            
        
        }// End for loop        

    }// End Display Faces Function
    //Call display faces (should I move this to the HTML onload?)
    displayFaces("yellow")

//listen for a click and then display the monster
    createMonster.addEventListener("click", () => chooseBody("blue"));
    createMonster.addEventListener("click", () => chooseFace("yellow", 3));



    
    // make a monster function to call the correct body. This will also pass in the color variable for the faces
    //Function takes a color and face number parameter
    function chooseBody(color) {
    console.log("Monster Function Working");

        //filter the monster object and match the selected color 
        const chosenBody = filterColor(color)
        console.log(chosenBody);

        //Make a div to hold the body
        let bodyDiv = document.createElement('div')
        bodyDiv.setAttribute('class', 'chosenBody')
        bodyDiv.setAttribute('id', 'body' + chosenBody[0].color );
        document.querySelector('.results').appendChild(bodyDiv)

                
        //dislay the correct colored body
        let monsterImage = document.createElement('img');
        monsterImage.setAttribute('class', 'monsterBody');
        monsterImage.setAttribute('src', chosenBody[0].body);
        monsterImage.setAttribute('alt', chosenBody[0].color + " Body");
        document.querySelector('.chosenBody').appendChild(monsterImage);
            
            
    } //End Choose Body Function
    


    function chooseFace(color,face_number){
        const faces = filterColor(color)
        const face = faces[0].faces
        //Iterate through the faces aray and find the correct face
        for (let j = 0; j < face.length; j++){
            if (j == face_number) {
                console.log("faces works")
                console.log(face[j])

                //Make a div to hold the body
                let faceDiv = document.createElement('div')
                faceDiv.setAttribute('class', 'chosenface')
                document.querySelector('.results').appendChild(faceDiv)
            
                //Add the correct face to the page
                let monsterFace = document.createElement('img');
                monsterFace.setAttribute('class', 'monsterFace');
                monsterFace.setAttribute('src', face[j]);
                monsterFace.setAttribute('alt',"face " + (face_number + 1));
                document.querySelector('.chosenface').appendChild(monsterFace);
            }//end if statement
        
        }//end for loop
    }// end choose face


    //still need a click function for the body, 
    //it will call the correct face set and call 
    //the display body function with the correct 
    //color and all the correct color to the faces function

    //Also need a click face function that will call the choose face function and pass in the correct number
    //if div one is clicked display face 1 etc.

})//end Anonymous


