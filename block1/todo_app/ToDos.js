// Variables
const toDoForm = document.querySelector(`.toDo`);
const tasks = document.querySelector(`.todo_list`);
let toDoList = [];

// Function to collect user input, save it to the to do list array and add it to the html
function submitTask(event){
    // Stop default submit
    event.preventDefault();
    console.log("Submitted")

    // Get task from user input
    // Can write this using current target or getElementById
    //const taskName = event.currentTarget.task.value;
    const taskName = document.getElementById(`task`).value
    console.log(taskName)

    //Save task information about the task to toDo
    const toDo = { 
        id : Date.now(), 
        content: taskName, 
        completed: false 
    };

    //Push toDo into toDoList array
    toDoList.push(toDo);
    console.log(`There are ${toDoList.length} in my array`);

    //Clear form
    // Can write this using current target or getElementById
    //event.currentTarget.task.value = ``;
    document.getElementById(`task`).value = ``;

    //Create a custom task sumbitted event 
    toDoForm.dispatchEvent(new CustomEvent("tasksSubmitted"));
} //End Submit task function


// Function to display the tasks
function displayTasks(){
    
    // loop through all items in the to do list array and make them into html list items
    const listItems = toDoList.map(toDo => 
        `<li class = "todo_item">
        <input type = "checkbox">
        <span class = "todo_item_name"> ${toDo.content} </span>
        <button aria-label = "Remove ${toDo.content}" value = "${toDo.id}" >&times;</button> 
        </li>`).join(``);

    // Add the list items to the html
    tasks.innerHTML = listItems;
} //End Display Function



//Stuff for the local storage file

//I didn't know how to use local storage, 
//so I used information from Wes Bos' beginner 
//JavaScript class. There is a walkthrough in the 
//class that explains how to use it. 
//Here is the link: https://beginnerjavascript.com

// Save user input to local storage
function saveToLs(){
    // Convert our array object to JSON so local storage can read it and save it
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    console.info(`Saving items to localstorage`);
}

//Get user input from local storage
function getTasks(){
    console.info(`restoring from localstorage`);
    const lsTasks = JSON.parse(localStorage.getItem("toDoList"));
    if (lsTasks.length >= 0){
        toDoList.push(...lsTasks);
        toDoForm.dispatchEvent(new CustomEvent("tasksSubmitted"));

    }
}

// saves the delete item information to local storage
function deleteItem(id){
    console.log(`Deleting Item`, id);

    //This needs to filter the array into checked and not checked and delete the checked one
    toDoList = toDoList.filter(toDo => toDo.id !== id);
    console.log(toDoList);
    //Event that calls display tasks and save to local storage
    toDoForm.dispatchEvent(new CustomEvent("tasksSubmitted"));

    // need to split the array into complete and not complete
}

//Event Listeners

//I used information from Wes Bos' beginner JavaScript 
//course to learn how to create custom listening events. 
//Here is the link: https://beginnerjavascript.com
toDoForm.addEventListener("submit", submitTask);
toDoForm.addEventListener("tasksSubmitted", displayTasks);
toDoForm.addEventListener("tasksSubmitted", saveToLs);

tasks.addEventListener("click", function(event){
    if(event.target.matches("button")) {
        deleteItem(parseInt(event.target.value));

    }
});



getTasks(); 

