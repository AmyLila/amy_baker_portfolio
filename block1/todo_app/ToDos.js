// Variables
const toDoForm = document.querySelector(`.toDo`);
const tasks = document.querySelector(`.todo_list`);
const toDoList = [];


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
    
    toDoForm.dispatchEvent(new CustomEvent("tasksSubmitted"));
} //End Submit task function

// Function to display the tasks
function displayTasks(){
    
    // loop through all items in the to do list array and make them into html list items
    const listItems = toDoList.map(toDo => 
        `<li class = "todo_item">
        <input type = "checkbox">
        <span class = "todo_item_name"> ${toDo.content} </span>
        <button aria-label = "Remove ${toDo.content}">&times;</button> 
        </li>`).join(``);

    // Add the list items to the html
    tasks.innerHTML = listItems;
} //End Display Function



//Stuff for the local storage file
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

//Event Listeners
toDoForm.addEventListener('submit', submitTask);
toDoForm.addEventListener("tasksSubmitted", displayTasks);
toDoForm.addEventListener("tasksSubmitted", saveToLs);

getTasks(); 

