// What is a To-Do List? 
// - Add a Task
// add a button - add task
// - Display Task
// - Update Task / Make Edits
// - Delete Task
// - Mark Task as Complete
/*thing.addEventListener("click", function () {
    // What should happen?
});*/


// click event for adding the task
document.querySelector('#inputButton').addEventListener('click', addTask);

// we need to create variables that will retrieve the users input and display it.
const inputBox = document.querySelector('#inputBox')
const listContainer = document.querySelector('#listContainer')
//vvv to count my tasks
const completedCounter = document.querySelector('#completedCounter')
const uncompletedCounter = document.querySelector('#uncompletedCounter')


function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

    completedCounter.textContent = completedTasks
    uncompletedCounter.textContent = uncompletedTasks
}

// define the function after the click event
//removed white space (trim)
function addTask() {
    const task = inputBox.value.trim();

    if (!task) {
        // alerts user they did not adda task if they click add
        alert('Time to add to your list')
        return;
    }
// ANKI CARD
    const li = document.createElement('li')
     //vvv all the properties that are attached to the object i was consol.loging
    // console.dir(li)
    // const editBin = document.createElement('span')
    // console.dir(editBin)
    

    //const check = document.createElement()

    li.innerText = task

    // vvv this is attaches to all the list items as they appear unlike when i di it in the HTML
    li.innerHTML = `
    <label>
        <input type="checkbox">
        <span class="taskText">${task}</span>
    </label>
    <span>
    <span class="editBin">✏️</span>
    <span class="deleteBin">🗑️</span>
    </span>
`;
    // had to add a class to my span because the the edit was only targeting the first task and not the rest
    // vvv add the actual task to our list 
    listContainer.appendChild(li)

    //vv clears the box after the entry has been submitted
    inputBox.value = ''

    // create a .querySelector for each of our element the checkbox
    const checkbox = li.querySelector('input')
    const editBin = li.querySelector('.editBin')
    const deleteBin = li.querySelector('.deleteBin')
    const taskSpan = li.querySelector('.taskText')

    // CHECKBOX checkboxfunction will react to the click with a linethough
    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
        updateCounters();
        //initaly wasnt working because i didnt have this in the function.
    });


    // EDITBIN edit button fuction
    editBin.addEventListener('click', function () {
        console.log('Edit works')
        const update = prompt('editTask', taskSpan.textContent);

        if (update !== null) {
            taskSpan.textContent = update;
            //Editing makes the task uncomplete
            li.classList.remove('completed')

            checkbox.checked = false;
            updateCounters();
        };

    });

    //DELETE BIN
    deleteBin.addEventListener('click', function () {
        li.remove();
        updateCounters();
    });

    //UPDATE COUNTER when a new task is added
    updateCounters();

}