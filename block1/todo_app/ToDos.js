// Variables
const toDoForm = document.querySelector(`.toDo`);
const tasks = document.querySelector(`.todo_list`);
const bottomButtons = document.querySelector(`.bottomButtons`);
let toDoList = [];
//const toDo = {};

// Function to collect user input, save it to the to do list array and add it to the html
function submitTask(event){
    // Stop default submit
    event.preventDefault();
    
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


// Function to display tasks 
function displayTasks(){
    // loop through all items in the to do list array and make them into html list items
    const listItems = toDoList.map(toDo => 
        `<li class = "todo_item">
        <input type = "checkbox" ${toDo.completed && "checked"} value = "${toDo.id}">
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
//end ls file


//Utilities file
// removes tasks from the list
function deleteItem(id){
    //This filters the array into checked and not checked and delete the checked ones
    toDoList = toDoList.filter(toDo => toDo.id !== id);
    console.log(toDoList)

    //Event that calls display tasks and save to local storage
    toDoForm.dispatchEvent(new CustomEvent("tasksSubmitted"));

} //End Delete Item function

// gathers and saves completed tasks
function completedTasks(id){
    // this looks through the to do list array 
    //and finds the todo with an id that matches the one that was clicked
    const taskRef = toDoList.find(toDo => toDo.id == id);

    //This changes completed from false to true when clicked
    taskRef.completed = !taskRef.completed;
    console.log(`It works`,taskRef)

    //Event that calls display tasks and save to local storage
    toDoForm.dispatchEvent(new CustomEvent("tasksSubmitted"));
    
}// end completed tasks
//end utilities
console.log(`It works global`,toDoList);

//Stuff for the main.js file

//Event Listeners

//I used information from Wes Bos' beginner JavaScript 
//course to learn how to create custom listening events. 
//Here is the link: https://beginnerjavascript.com
toDoForm.addEventListener("submit", submitTask);
toDoForm.addEventListener("tasksSubmitted", displayTasks);
toDoForm.addEventListener("tasksSubmitted", saveToLs);

// This event listener is listening for a click anywhere in tasks.
//Then it calls either the delete item function or the completed task function depending on what is clicked. 
tasks.addEventListener("click", function(event){
    const id = parseInt(event.target.value);
    if(event.target.matches("button")) {
        deleteItem(id);
    };

    if(event.target.matches("input[type = 'checkbox']")) {
        completedTasks(id);

    };
});

// bottomButtons.addEventListener("click", function(event){
//     const id = event.target.value;
//     if(event.target.matches("button")) {
//         console.log(`button all`);
//     };

//     if(event.target.matches("input[type = 'checkbox']")) {
//         completedTasks(id);

//     };
// });

//This is calling the get tasks function that retrieves information from local storage
getTasks(); 

//Function to split the to do list into a new array for completed items
function filterFinished(){
    const toDoList1 = toDoList.filter(toDoSingle => toDoSingle.completed == true);
    console.log("Filter works", toDoList1)

    //Event that calls display tasks and save to local storage
    toDoForm.dispatchEvent(new CustomEvent("tasksSubmitted"));

}
filterFinished()

function filterNotFinished(){
    const toDoList2 = toDoList.filter(toDoSingle => toDoSingle.completed == false);
    console.log("Filter2 works", toDoList2)

    //Event that calls display tasks and save to local storage
    toDoForm.dispatchEvent(new CustomEvent("tasksSubmitted"));

}
filterNotFinished()
