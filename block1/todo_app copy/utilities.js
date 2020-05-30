//Utilities file
// removes tasks from the list
function deleteItem(id){
    //This filters the array into checked and not checked and delete the checked ones
    toDoList = toDoList.filter(toDo => toDo.id !== id);
    console.log(toDoList,"deleted item")

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

//Function to split the to do list into a new array for completed items
function filterFinished(){
    finishedList = toDoList.filter(toDoSingle => toDoSingle.completed == true);
    console.log("Filter works", finishedList)

}


//Function to split the to do list into a new array for uncompleted items
function filterNotFinished(){
    unfinishedList = toDoList.filter(toDoSingle => toDoSingle.completed == false);
    console.log("Filter2 works", unfinishedList)


}

export { deleteItem, completedTasks,filterFinished, filterNotFinished};

//end utilities
