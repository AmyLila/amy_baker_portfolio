// get monster info from the JSON file
const monsterURL = "block2/monster_faces/data/monster.json";
fetch(monsterURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    const temple = jsonObject['temples'];

    for (let i = 0; i < temple.length; i++ ) {
                  if (temple[i].name == "Rome Italy Temple")
                  {  
                    
    document.getElementById("name").textContent = temple[i].name;
    document.getElementById("dedicated").textContent = temple[i].dedicated;
    document.getElementById("address1").textContent = temple[i].address1;
    document.getElementById("address2").textContent = temple[i].address2;
    document.getElementById("address3").textContent = temple[i].address3;
    document.getElementById("phone").textContent = temple[i].phone;

    var linkTest = document.getElementById("link");
    linkTest.href= temple[i].link;
                
   

 }
}
});
// create a monster object
const monster = {

};