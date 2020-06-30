// get monster info from the JSON file
/Users/Abundance/school-files/WDD_330/portfolio/block2/monster_faces/data/monster.json
const monsterURL = "https://shakerbaker78.github.io./temple-inn/data/temple-info.json";
fetch(monsterURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject); //temporary checking for valid response and data parsing
    const monster = jsonObject['monsters'];
    
    

    for (let i = 0; i < monster.length; i++ ) {
                  if (monster[i].color == "green")
                  {  
                      console.log("json green works")
                    
    // document.getElementById("name").textContent = temple[i].name;
    // document.getElementById("dedicated").textContent = temple[i].dedicated;

                
   

 }
}
});
// create a monster object
// const monster = {

// };