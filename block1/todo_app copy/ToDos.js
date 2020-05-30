//import { saveToLs, getTasks } from './ls.js';
// Variables
const toDoForm = document.querySelector(`.toDo`);
const tasks = document.querySelector(`.todo_list`);
const bottomButtons = document.querySelector(`.bottomButtons`);
let toDoList = [];
let finishedList = [];
let unfinishedList = [];

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
function displayTasks(arrayName){
    // loop through all items in the to do list array and make them into html list items
    const listItems = arrayName.map(toDo => 
        `<li class = "todo_item">
        <input type = "checkbox" ${toDo.completed && "checked"} value = "${toDo.id}">
        <span class = "todo_item_name"> ${toDo.content} </span>
        <button aria-label = "Remove ${toDo.content}" value = "${toDo.id}" >&times;</button> 
        </li>`).join(``);

    // Add the list items to the html
    tasks.innerHTML = listItems;

} //End Display Function


// console.log(`It works global`,toDoList);

// //Stuff for the main.js file

// //Event Listeners

// //I used information from Wes Bos' beginner JavaScript 
// //course to learn how to create custom listening events. 
// //Here is the link: https://beginnerjavascript.com
// toDoForm.addEventListener("submit", submitTask);
// toDoForm.addEventListener("tasksSubmitted", () => displayTasks(toDoList));
// toDoForm.addEventListener("tasksSubmitted", saveToLs);


// This event listener is listening for a click anywhere in tasks.
//here is the article where I found it:
// https://gomakethings.com/checking-event-target-selectors-with-event-bubbling-in-vanilla-javascript/
//Then it calls either the delete item function or the completed task function depending on what is clicked. 
// tasks.addEventListener("click", function(event){
//     const id = parseInt(event.target.value);
//     if(event.target.matches("button")) {
//         deleteItem(id);
//     };

//     if(event.target.matches("input[type = 'checkbox']")) {
//         completedTasks(id);

//     };
// });

// // This listens for any click in the bottom buttons div and then calls functions depending on what is clicked. 
// bottomButtons.addEventListener("click", function(event){
//     if(event.target.matches("#all")) {
//         console.log(`button all`);
//         displayTasks(toDoList)
//     };
//     if(event.target.matches("#active")) {
//         console.log(`button active`);
//         filterNotFinished()
//         displayTasks(unfinishedList)

//     };
//     if(event.target.matches("#completed")) {
//         console.log(`button completed`);
//         filterFinished()
//         displayTasks(finishedList)
//     };
// });

// //This is calling the get tasks function that retrieves information from local storage
// getTasks(); 



