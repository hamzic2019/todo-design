let tasks = document.querySelector('.tasks');
let input = document.querySelector('#add');
let icon  = document.querySelector('.task-icon');
let taskH = document.querySelector('.task');

let todos = []
let id = 0;

input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        addNewTodo(e.target.value);
        e.target.value = '';
    };
});

tasks.addEventListener('click', (e) => {
    removeTodo(e.target.id);
});

setInterval(() => {
    
}, 100);

function addNewTodo(value) {
    todos.push({task: value, id: id});
    id++
    updateDisplay();
}

function updateDisplay() {
    tasks.innerHTML = '';
    todos.forEach((todo, index) => {
        tasks.innerHTML += `
            <div class = "task" >
                <p class = "task-title" > ${todo.task} </p> 
                <i class = "fa fa-trash-o task-icon" id="${todo.id}" > </i> 
            </div>`;
    });

};

function removeTodo(index) {
    
    todos.forEach((todo, i) => {

        if(todo.id == index) {
            todos.splice(i, 1);
        }
    });


    tasks.innerHTML = '';
    todos.forEach((todo, index) => {
        tasks.innerHTML += `
            <div class = "task" >
                <p class = "task-title" > ${todo.task} </p> 
                <i class = "fa fa-trash-o task-icon" id="${todo.id}" > </i> 
            </div>`;
    });
};
    
